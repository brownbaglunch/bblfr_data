#!/usr/bin/env node

var https = require('https');
var fs = require('fs');
var moment = require('moment');
var request = require('request');
var path = require('path');

console.log("*** starting");

var now = moment();

var data = fs.readFileSync(path.resolve(__dirname, '../baggers.js')).toString();

// Remove the "var data = " part and
script = data.replace("var data = ", "").replace(/;([^;]*)$/, '');
bblfrData = JSON.parse(script);

// Store cities as a map so we will be able to replace cities by coordinates
var cities = {};
bblfrData.cities.forEach(function(obj) {
    cities[obj.name] = obj;
} );

var webSiteExists = function(name, url) {
    request(url, {method: 'HEAD', timeout: 10000}, function (err, res, body){
        if (res !== undefined) {
            if (res.statusCode == 404 || res.statusCode >= 500) {
                console.log(name, 'Res incorrect URL', url, 'got', res.statusCode);
            }
        } else {
            console.log(name, 'Err incorrect URL', url, 'got', err);
        }
    });
};

// Read speakers
var websiteTypes = {};
var speakers = [];
bblfrData.baggers.forEach(function(obj) {
    var sessions = [];

    obj.sessions.forEach(function(session) {
        sessions.push({
            "title": session.title,
            "abstract": session.summary,
            "tags": obj.tags,
            "lang": [ "fr" ]
        });
    });

    obj.sessions = sessions;
    delete obj.tags;

    // Generate the new contact
    var contact = {};
    if (obj.twitter !== undefined) {
        contact['twitter'] = obj.twitter;
        delete obj.twitter;
    }
    if (obj.contact !== undefined) {
        contact['mail'] = obj.mail;
        delete obj.contact;
    }
    delete obj.mail;

    if (obj.since === undefined || obj.since === '') {
        // For audit purpose
        console.log('no date for', obj.name);
    }


    obj.contact = contact;

    // Rewrite names
    obj.name = obj.name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    // Rewrite website links
    var websites = [];
    if (obj.websites === undefined) {
        // For audit purpose
        console.log('no website for', obj.name);
    } else {
        obj.websites.forEach(function(website) {
            // webSiteExists(obj.name, website.href);

            var name = website.title.toLowerCase();
            switch (name) {
                case 'github':
                    name = 'GitHub';
                    break;
                case 'podcast':
                    name = 'Podcast';
                    break;
                case 'google+':
                    name = 'Google+';
                    break;
                case 'slideshare':
                    name = 'Slideshare';
                    break;
                case 'hopwork':
                    name = 'Hopwork';
                    break;
                case 'les bouquins que j\'ai écrit':
                    name = 'Book';
                    break;
                case 'infoq':
                    name = 'InfoQ';
                    break;
                case 'viadeo':
                    name = 'Viadeo';
                    break;
                default:
                    if (name.toLowerCase().indexOf('blog') > -1) {
                        name = 'Web';
                    } else if (name.toLowerCase().indexOf('site') > -1) {
                        name = 'Web';
                    } else if (website.href.toLowerCase().indexOf('linked') > -1) {
                        name = 'LinkedIn';
                    } else if (website.href.toLowerCase().indexOf('about.me') > -1) {
                        name = 'AboutMe';
                    } else {
                        name = 'Web';
                    }
            }

            // Audit HTTP link


            websites.push({
                "name": name,
                "url": website.href
            });

            obj.websites = websites;

            // For audit purpose
            if (websiteTypes[name] !== undefined) {
                var nb = websiteTypes[name].nb;
                nb++;
                websiteTypes[name].nb = nb;
                websiteTypes[name].list.push(website.href);
            } else {
                websiteTypes[name] =  {
                    nb: 1,
                    list: [ website.href ]
                };
            }

        });
    }

    speakers.push(obj);

//        console.log('speaker', obj.name, JSON.stringify(obj, null, 2));
});

// For audit purpose
// console.log(websiteTypes);
console.log('different website types', Object.keys(websiteTypes).length);

// Sort speakers
speakers = speakers.sort(function(a, b){
    return a.since == b.since ? 0 : +(a.since > b.since) || -1;
});

// Sort cities
const orderedCities = {};
Object.keys(cities).sort().forEach(function(key) {
    orderedCities[key] = cities[key];
});

// Create the new final object
var newData = {
    speakers: speakers,
    cities: orderedCities
};


var finalString = 'var data = ' + JSON.stringify(newData, null, 2) + ";";

fs.writeFileSync(path.resolve(__dirname, 'baggers-new.js'), finalString);

console.log('file generated');

