// Project data configuration for Josh Lind Art Portfolio
const projects = [
    {
        id: "whiskey-oclock",
        title: "Whiskey O'Clock",
        type: "giant 7-segment display",
        year: "2024",
        yearRange: "2024–present",
        summary: "Giant digital clock with 7-segment displays made from whiskey bottles. The ends of rectangular bottles make up the pieces of this jumbo very-lo-res \"screen.\"",
        links: [
            { text: "Full-scale draft", url: "https://www.dropbox.com/scl/fi/e0usvywct9gnfwn3p9oga/2024-04-11-19.51.06.mov?rlkey=56707ki9c2csljepkwb06r2f1&st=r7sqivl0&dl=0" },
            { text: "Prototype video on IG", url: "https://www.instagram.com/p/C2JPbp2xCbY4JZXmIlpwT1ElLkkU41dVV2iL_A0/" },
        ]
    },
    {
        id: "posters-future",
        title: "City of the Future",
        type: "posters and signage",
        year: "2024",
        yearRange: "2023",
        summary: "Part of an immersive walk-through called City of the Future at the Teal Building on Capitol Hill, these posters and lightboxes helped draw guests into the future world of the exhibit. Pieces included advertisements and propaganda from businesses and city government. The work explored classism, utopia/dystopia, and how the future will affect our daily lives.",
        media: {
            images: [
                "media/posters-future/2023-05-29 18.37.57.jpg",
                "media/posters-future/2023-06-01 15.57.11.jpg"
            ],
            videos: []
        },
        links: [
            { text: "Promo Posters", url: "https://www.instagram.com/p/Cs48Z7Zx4Ez/" },
            { text: "TramaDroidAll", url: "https://www.instagram.com/p/Cs477UFrXnb/" },
            { text: "CryoNap", url: "https://www.instagram.com/p/CtA3o6grCFh/" },
            { text: "Oxygen-- Don't run out.", url: "https://www.instagram.com/p/CtORiQROmlI/" },
            { text: "Thoughts & Prayers Burger", url: "https://www.dropbox.com/scl/fi/o0m9tvwqy3669k2so0nwy/2023-05-04-19.54.01.png?rlkey=xsl948oy1zb92l8bbk3ipc9bp&st=3iibec0w&dl=0" },
            { text: "Website", url: "https://seattlecityofthefuture.com/" }
        ]
    },
    {
        id: "timewarp",
        title: "TimeWarp",
        type: "wooden planetary gears",
        year: "2023",
        summary: "Signage prototype with universal mechanical gear run by a disco ball motor. Central hub portion shown in video.",
        links: [
            { text: "Internal gears", url: "https://www.dropbox.com/scl/fi/innzeyvax5uou8i2tni9b/2023-03-15-18.05.39.mov?rlkey=75so34f8poyefp0vxf5wxvdp9&st=q7x7ehof&dl=0" },
            { text: "Spiral", url: "https://www.instagram.com/p/Cp1K4fnp19K/" }
        ]
    },
    {
        id: "puget-sound",
        title: "Puget Sound",
        type: "Topography in resin",
        year: "2023",
        summary: "Resin and wood sculpture of the Puget Sound topography, including the San Juan Islands and Hood Canal.",
        media: {
            images: [
                "media/puget-sound/2023-04-14 00.13.50-1.jpg"
            ],
            videos: []
        }
    },
    {
        id: "electric-sheep",
        title: "Electric Sheep",
        type: "DJ night posters x18",
        year: "2023",
        yearRange: "2023–present",
        summary: "This monthly DJ night features custom posters with an ongoing narrative about the rise and fall of robotic sheep deployed into a future culture.",
        links: [
            { text: "#18", url: "https://www.instagram.com/p/DJ7lCTvzD_i/" },
            { text: "#15", url: "https://www.instagram.com/p/DGRlRSKyHlt/" },
            { text: "#14", url: "https://www.instagram.com/p/DFIfShovNWt/" },
            { text: "#13", url: "https://www.instagram.com/p/DBMyVL0z7NF/" },
            { text: "#10", url: "https://www.instagram.com/the_pop_agenda/p/C7NG1q-Sq6P/" },
            { text: "#8", url: "https://www.instagram.com/the_pop_agenda/p/C4eBQ0WvEJz/" }
        ]
    },
    {
        id: "flower-sign",
        title: "Flower sign",
        type: "Outdoor field marker",
        year: "2023",
        summary: "Wood relief sign made for outdoor flower field to inform visitors of wildflowers.",
        links: [
            { text: "Photo", url: "https://www.dropbox.com/scl/fi/yyp942neu7mwbd02azebq/2023-12-24-21.50.20.jpg?rlkey=iaxrmcph2pa9391ugzgn9l0k7&st=7oq0g33c&dl=0" }
        ]
    },
    {
        id: "color-learning-box",
        title: "Color Learning Box",
        type: "interactive toy",
        year: "2022",
        summary: "Child's toy with lights, buttons, and sounds to teach an infant their colors.",
        links: [
            { text: "Demo video", url: "https://www.dropbox.com/scl/fi/tuyp99jez7ld7c4d3gt6t/2022-11-28-12.52.29.mov?rlkey=x3x3gtipsa1g5o1eft1c6t9yf&st=ro2cyyjf&dl=0" },
            { text: "Insides", url: "https://www.dropbox.com/scl/fi/g2cg20k9cy9n25pxj874s/2022-11-27-23.02.09.jpg?rlkey=5gmfnf9d7bxcwhv2lukeouqwd&st=5nvlsvc1&dl=0" }
        ]
    },
    {
        id: "fortune-calibrator",
        title: "Fortune Calibrator",
        type: "arcade fortune machine",
        year: "2020",
        yearRange: "2020–2021",
        summary: "Based on a classic fortune-telling machine, this installation presents a fortune based on choices and allows the user to vote on the what they received.",
        links: [
            { text: "Photo", url: "https://www.dropbox.com/scl/fi/j394p9c95kdam9yorpjz7/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f666f7274756e6563616c69627261746f722e61707073706f742e636f6d2f6f2f494d475f333534392e6a70673f616c743d6d65646961.jpeg?rlkey=zctlvsn1obhjjlzf8usxsnw7o&st=ixq6nyh3&dl=0" },
            { text: "Web frontend", url: "https://fortunecalibrator.firebaseapp.com" },
            { text: "Workshop", url: "https://doublejosh.com/post/656637761187627008/fortune-teller-workshop" },
            { text: "Coin slot, 3D", url: "https://www.tinkercad.com/things/38c56EhGnLJ-coin-slot" },
            { text: "Ruxpin", url: "https://www.dropbox.com/scl/fi/a3xbzrejij0ln7ro9jo5m/2022-02-03-13.48.15.mov?rlkey=esq3usc3h3roh77nov35ofrwq&st=s9813cyb&dl=0" }
        ]
    },
    {
        id: "youre-on-the-money",
        title: "You're On the Money",
        type: "Peep hole reflection engraving",
        year: "2020",
        summary: "Reflection-based engraving piece with peep hole viewing mechanism."
    },
    {
        id: "crystal-experiment",
        title: "Crystal Experiment",
        type: "arcade machine",
        year: "2020",
        summary: "Arcade-style slot machine interface with web backend to measure interactions.",
        media: {
            images: [
                "media/crystal-experiment/2019-12-13 00.00.57.jpg",
                "media/crystal-experiment/2025-11-19 9.44.22.png"
            ],
            videos: []
        },
        links: [
            { text: "Series", url: "https://doublejosh.com/post/677646062958346240/fortune-teller-series-and-the-crystal-prediction" },
            { text: "Results site", url: "https://crystal-experiment.web.app/"}
        ]
    },
    {
        id: "panels-of-futurescape",
        title: "Panels of Futurescape",
        type: "Animated panel series",
        year: "2020",
        summary: "Backlit coroplast panels to simulate servers racks and data center screens.",
        media: {
            images: [
                "media/panels-of-futurescape/2023-05-29 18.37.57.jpg",
                "media/panels-of-futurescape/2023-06-01 15.57.11.jpg"
            ],
            videos: []
        },
        links : [
            { text: "Video", url: "hhttps://www.dropbox.com/scl/fi/7e2jzxwo496cjwvg3zpgz/2018-07-02-22.15.37.mov?rlkey=86p2x052aq1x8bwq0gogt4dof&st=ce9b5bqw&dl=0" },
            { text: "Dual display", url: "https://www.dropbox.com/scl/fi/ccwxzpdkndrkrfcxu9svc/2018-07-11-21.44.07.mov?rlkey=zigx52pwlmhd94y714f4364rw&st=e52bvjkt&dl=0" },
        ]
    },
    {
        id: "shy-bamboo",
        title: "Shy Bamboo",
        type: "interactive lighting",
        year: "2020",
        summary: "Interactive lighting installation with responsive addressable light strands elements."
    },
    {
        id: "mt-adams",
        title: "Mt Adams",
        type: "diorama lamp",
        year: "2019",
        summary: "Nite light wall shadow sunrise/sunset diorama lamp.",
        media: {
            images: [
                "media/mt-adams/2019-12-23 02.06.50.jpg"
            ],
            videos: []
        }
    },
    {
        id: "pop-agenda",
        title: "POPAGENDA",
        type: "mobile popups",
        year: "2019",
        yearRange: "2019–present",
        summary: "This mini food-truck serves snacks and mobile music performance. Staff wear period costumes (hats, bow ties, aprons) while in character giving away snacks. Puppets are involved. This piece has been to numerous PNW outdoor events.",
        media: {
            images: [
                "media/pop-agenda/popagenda-critial-2025.JPG",
                "media/pop-agenda/2022-04-14 18.58.49.jpg",
                "media/pop-agenda/2023-10-08 02.09.29.jpg",
                "media/pop-agenda/2024-10-31 00.17.40.jpg"
            ],
            videos: []
        },
        links: [
            { text: "Instagram", url: "https://www.instagram.com/the_pop_agenda/" },
            { text: "popagenda.org", url: "https://popagenda.org/" },
            { text: "Early ideas", url: "https://doublejosh.com/post/184371658853/popagenda" },
        ]
    },
    {
        id: "final-approach-motel",
        title: "Final Approach Motel",
        type: "popup tiny bar",
        year: "2019",
        yearRange: "2018, 2024",
        summary: "An immersive tiny bar experience of a mid-century, un-scale, hotel lobby. This \"roach motel\" features morphing wallpaper, resin poured roach wing chandelier, and a stained wooden bar. The staff are dressed as cockroaches of course. This piece was installed at the Golden Guy Alley for several years in BRC.",
        links: [
            { text: "Website", url: "https://www.metafaux.com/finalapproachmotel/" },
            { text: "Instagram", url: "https://www.instagram.com/p/B2DfDh5JtLd/" },
        ]
    },
    {
        id: "light-skirmish",
        title: "Light Skirmish",
        type: "large interactive game",
        year: "2018",
        summary: "Interactive two-player game comprised of a circular array of wifi-controlled multi-color LED stage lights and two large wireless nautical steering wheels. Players face one another across the circle and must spin their wheel… causing lights to illuminate in a series around the loop. The \"spinning\" lights decrease in speed with the game's goal to stop on the opposing player. This game was built using Wemos Arduino micro-controllers inserted into 24 outdoor 10W/12V LED flood lights, powered by lithium battery packs. Installed at Electric Sky Art Camp and Burien Arts-A-Glow.",
        links: [
            { text: "Video 1", url: "https://www.dropbox.com/scl/fi/b3xpb3ak011cocd18jcsv/2017-09-09-20.17.22.mov?rlkey=cqo9tws4wh4kepfp1xorclvqv&st=k0fjl7d5&dl=0" },
            { text: "Color wash", url: "https://www.dropbox.com/scl/fi/mq9s2ecl53b9nzhitg6i8/2017-09-09-20.12.28.mov?rlkey=m3lwn7tbyc7wtqqstwd0mxadu&st=b08bra22&dl=0" },
            { text: "Video 3", url: "https://www.dropbox.com/scl/fi/dt3bvku0tdxuabypon46h/2017-09-09-20.11.10.mov?rlkey=v5q51n3vpd6hnsljp33cs1io0&st=akyos5sb&dl=0" },
        ]
    },
    {
        id: "doctrine",
        title: "Doctrine",
        type: "Board game + stamp pieces",
        year: "2018",
        summary: "Board game With a theme of cult teachings and outcomes. Players use a set of symbols to acquire members and win.",
        links: [
            { text: "Photos and symbols", url: "https://doublejosh.com/post/180098521733/the-first-artifacts-of-a-new-board-game-about" },
            { text: "Stamp study", url: "https://doublejosh.com/post/180294573228" },
            { text: "Gold on black", url: "https://www.dropbox.com/scl/fi/hl2z6ra0ymoz873ynhkyz/2022-04-12-20.03.12-3.jpg?rlkey=onsq1tvsitctjc0ajl5ed4v4s&st=n1n1n9cr&dl=0" }
        ]
    },
    {
        id: "upgrade-node",
        title: "Upgrade Node",
        type: "video",
        year: "2018",
        summary: "Programmable lights with large effect using cheap materials (conduit, coroplast, foam). Pieces were assembled at various events near Seattle.",
        media: {
            images: [
                "media/upgrade-node/2018-12-09 18.30.26.jpg"
            ],
            videos: [
                "media/upgrade-node/2018-12-14 00.09.44.mov"
            ]
        },
        links: [
            { text: "Panels video", url: "https://www.dropbox.com/scl/fi/ccwxzpdkndrkrfcxu9svc/2018-07-11-21.44.07.mov?rlkey=zigx52pwlmhd94y714f4364rw&st=niaza35p&dl=0" },
            { text: "Instagram", url: "https://www.instagram.com/p/Bp2jY2slYzIHhpBcR2msMvHyklOBqPwUsDd-Nw0/" }
        ]
    },
    {
        id: "lux-stellate",
        title: "Lux Stellate",
        type: "geometric chandelier",
        year: "2016",
        summary: "A glowing star, comprised of two intersecting tetrahedron pyramids, constructed from clear tubes with RGB LEDs inside along each edge. The shape expresses a number of lighting patterns that are beautiful to watch and show off the geometry of the hanging art. It appears as a floating, mystical, 3D hexagram, Merkabah, geometric, alluring chandelier. The scale was 6 feet across.",
        links: [
            { text: "Read More & Parts list", url: "http://doublejosh.com/post/150948636018/light-star" },
            { text: "Photo 1", url: "http://f.cl.ly/items/28222V0w1W1W2e2T1S07/MEB_20140906_394.jpg" },
            { text: "Photo 2", url: "http://cl.ly/image/041P312y2i3i/140906205535_0487.jpg" },
            { text: "Photo 3", url: "https://flic.kr/p/pmunLk" }
        ]
    },
    {
        id: "emmett",
        title: "Emmett",
        type: "open-source hover board",
        year: "2016",
        summary: "This was my effort to create a DIY one-wheel, self-balancing, electric skateboard. As the project progressed it became obvious this should be open-sourced. I was able to achieve decent accelerometer control and dealt with battery management, but got stuck handling the throttles of brushless electric motor controllers. I'd love to reboot this someday.",
        links: [
            { text: "Blog", url: "https://openemmett.tumblr.com/" },
            { text: "Instructions wiki", url: "https://github.com/doublejosh/emmett/wiki" }
        ]
    },
    {
        id: "stormbrella",
        title: "Stormbrella",
        type: "rain and lightening umbrella",
        year: "2016",
        summary: "Provides a mobile stormy light show. A clear umbrella is lined with addressable LEDs on the spines, which display a random rain simulation. Occasionally thunder will strike at random intervals and strength. Care was taken to ensure natural effects. Useful to improve friends finding you.",
        links: [
            { text: "GitHub code", url: "https://github.com/doublejosh/stormbrella" },
            { text: "Video", url: "https://www.youtube.com/watch?v=DrYusomXhdg" }
        ]
    },
    {
        id: "self-portrait",
        title: "Doodle portrait",
        type: "painting",
        year: "2016",
        summary: "Doodles with fine pen on canvas.",
        links: [
            { text: "Photo", url: "https://www.dropbox.com/scl/fi/z4qz4h3nhxayvcj6w7rs7/2022-03-15-22.22.51.jpg?rlkey=ahcqose2obombmdo0a3p4khw1&st=fwmtm225&dl=0" }
        ]
    },
    {
        id: "summer-rain",
        title: "Summer Rain",
        type: "smart fountain",
        year: "2015",
        summary: "A computer controlled graphical fountain that \"prints\" designs using falling drops of water. Audio input allows participants to interact with the fountain and influence the designs produced. The foundation is large enough for people to stand in an outer basin around the controlled water jets. It is lit for night time displays.",
        links: [
            { text: "View on Hackster", url: "https://www.hackster.io/4712/sound-reactive-fountain-81d461" }
        ]
    },
    {
        id: "sparkle-shoes",
        title: "Sparkle Shoes",
        type: "sensing lit footwear",
        year: "2014",
        summary: "Set of RGB LED rimmed sneakers with force sensor inputs that control the color as the wearer steps, dances or jumps for joy. The shoes have several light modes which can be cycled through with a \"double heel stomp\" action. Battery packs and controller is worn on the ankle.",
        links: [
            { text: "Video in rainbow mode", url: "https://www.youtube.com/watch?v=D-02U-SUFkM" },
            { text: "Hardware diagram (PDF)", url: "http://f.cl.ly/items/3f1P363X432z3J3g2307/SparkleShoes.pdf" },
            { text: "Video V3", url: "https://www.youtube.com/watch?v=b7zJV3MI86I" }
        ]
    },
    {
        id: "rain-cloud",
        title: "Rain Cloud",
        type: "dynamic art on a stick",
        year: "2014",
        summary: "Cartoonish, lit, large rain cloud on the end of an 8 ft. pole held above one's head. LED strands dangling from the cloud emulate random rain drops falling on the person holding the piece. Simple lights make the white cloud visible. The art is useful for being recognized across a crowded event and for sneaking into pictures.",
        links: [
            { text: "Featured in Mashable article", url: "http://mashable.com/2014/08/28/burning-man-night-2014/" },
            { text: "Photo", url: "http://cl.ly/image/3m0o2N2K1N0c/10500259_10203627538361932_3336589148971603505_n.jpg" }
        ]
    },
    {
        id: "meteorolumen",
        title: "Meteorolumen",
        type: "virtual weather window",
        year: "2013",
        summary: "Consists of a 2D array of Arduino controlled RGB LEDs which simulates slow flakes falling, rain pouring, and leaves tumbling down. It is presented behind a long vertical vintage (recovered) window. The viewer peers through the glass to watch seasons change as the randomized weather streams by. Now privately owned.",
        links: [
            { text: "Just snow, just lights", url: "http://www.youtube.com/watch?v=U2_FuWgj0B8" },
            { text: "Single speed flakes", url: "http://www.youtube.com/watch?v=d0-1pvcFxM8" },
            { text: "GitHub", url: "https://github.com/doublejosh/Frightful_Weather" },
            { text: "Oscillate 1", url: "http://www.mynewsletterbuilder.com/email/newsletter/1411573309" },
            { text: "Oscillate 2", url: "http://dorkbotsea.org/events/oscillate-art-celebrating-light-and-movement" }
        ]
    },
    {
        id: "night-balloons",
        title: "Night Balloons",
        type: "glowing orb array",
        year: "2013",
        summary: "A string of balloon lanterns, each with a microchipped RGB LED bulb, making them controllable inflatable light bulbs synchronized from an Arduino processor on the ground. The light patterns and simulated motion is done via phone/ethernet cords and connection terminals. This piece has been setup with helium as single vertical chain as well as in a 3D geometric (tetrahedron) array.",
        links: [
            { text: "Photo", url: "https://www.dropbox.com/scl/fi/0smye5jlfzi1h9p6s3e5i/2016-01-26-16.13.55.jpg?rlkey=ovp1azv6bwtjcih19rd3c0swt&st=tvx2ykkx&dl=0" },
            { text: "Video #1", url: "http://www.youtube.com/watch?v=B_QpBHy1OX4" },
            { text: "Video #2", url: "http://www.youtube.com/watch?v=ka-9o_Phb_I" },
            { text: "GitHub", url: "https://github.com/doublejosh/balloon_arch" }
        ]
    },
    {
        id: "numbers",
        title: "Secret Numbers",
        type: "math painting",
        year: "2012",
        summary: "",
        links: [
            { text: "Photo", url: "https://www.dropbox.com/scl/fi/ustpxix157ut1e7qz9br2/2024-04-04-13.12.34.jpg?rlkey=2vq6odo8f9c527hy2453wy5ag&st=qxsuzy7k&dl=0" }
        ]
    },
    {
        id: "space-cat-vampire",
        title: "Space Cat Vampire Adventure",
        type: "Board game",
        year: "2011",
        yearRange: "2011-2018",
        summary: "Board game depicting planets and spaceships with resource trading. The theme was cats and vampires."
    },
    {
        id: "steve-robot",
        title: "Steve the Robot H.E.Ai.D.",
        type: "interactive audio experience",
        year: "2010",
        summary: "A large-scale, interactive, collaborative audio installation in which people moved to control lasers generate music together. Short for Human Energized Artificial Intelligence Device— the project was intended as a new type of instrument played both as an individual and/or within a group. Because sound was created by simple movement the barrier to participation was low, and emergent collaborative exploration often became the focus.",
        links: [
            { text: "Making of Steve the Robot", url: "https://www.slideshare.net/slideshow/making-of-steve-the-robot-heaid/3942828" }
        ]
    },
    {
        id: "radioator",
        title: "Radioator",
        type: "mobile broadcast cart",
        year: "2007",
        summary: "A mobile radio station built on a golf cart chassis that broadcast mobile FM (25mW). It allowed vehicles and people to synchronize nearby; sometimes silently using ear phones (50 provided to guests), as well as synchronizing disparate speaker systems. The cart frame was made to look like a giant 12 foot set of headphones in bright chartreuse using two fold-out hemispheres and a connecting arch tubes."
    },
    {
        id: "iheartsea",
        title: "iheartSEA",
        type: "local news aggregator",
        year: "2005",
        summary: "This project was a web platform expressing the unique online voice of different neighborhoods within the Seattle area. As people and businesses voiced their thoughts via their twitter account or blog it would join the stream. (Folks could also create an account directly). At its essence iheartsea.com was a news and chatter aggregator."
    },
    {
        id: "anthropornography",
        title: "Anthropornography",
        type: "faux cologne brand",
        year: "2005",
        summary: "A collaboration with an essential scent business owner, it presented a fantastical brand backstory for a custom-made scent. It was an experiment in alternative packaging for an existing product which supposed an ancient grounding in the human sexual response to the cologne. This includes: web presence, brand, cards, retail display, and product packaging."
    },
    {
        id: "tacky-smack",
        title: "Tacky Smack",
        type: "Vinyl wall art biz",
        year: "2005",
        summary: "Commercial vinyl wall art business venture."
    }
];
