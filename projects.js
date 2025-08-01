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
            { text: "Prototype", url: "https://www.instagram.com/reel/C2JPbp2xCbY/" },
            { text: "Full-scale draft", url: "https://www.dropbox.com/scl/fi/e0usvywct9gnfwn3p9oga/2024-04-11-19.51.06.mov?rlkey=56707ki9c2csljepkwb06r2f1&st=r7sqivl0&dl=0" },
            { text: "In-progress", url: "#" }
        ]
    },
    {
        id: "posters-future",
        title: "City of the Future",
        type: "posters and signage",
        year: "2024",
        yearRange: "2023",
        summary: "Part of an immersive walk-through called City of the Future at the Teal Building on Capitol Hill, these posters and lightboxes helped draw guests into the future world of the exhibit. Pieces included advertisements and propaganda from businesses and city government. The work explored classism, utopia/dystopia, and how the future will affect our daily lives.",
        links: [
            { text: "Promo Posters", url: "https://www.instagram.com/p/Cs48Z7Zx4Ez/" },
            { text: "TramaDroidAll", url: "https://www.instagram.com/p/Cs477UFrXnb/" },
            { text: "CryoNap", url: "https://www.instagram.com/p/CtA3o6grCFh/" },
            { text: "Oxygen-- Don't run out.", url: "https://www.instagram.com/p/CtORiQROmlI/" },
            { text: "Website", url: "https://seattlecityofthefuture.com/" }
        ]
    },
    {
        id: "timewarp",
        title: "TimeWarp Mechanical Sign",
        type: "wooden planetary gears",
        year: "2023",
        summary: "Signage with universal mechanical gear run by a disco ball motor. Central hub portion shown in video.",
        links: [
            { text: "Demo video", url: "https://www.dropbox.com/scl/fi/innzeyvax5uou8i2tni9b/2023-03-15-18.05.39.mov?rlkey=75so34f8poyefp0vxf5wxvdp9&st=q7x7ehof&dl=0" },
            { text: "Instagram", url: "https://www.instagram.com/p/Cp1K4fnp19K/" }
        ]
    },
    {
        id: "puget-sound",
        title: "Puget Sound",
        type: "Topography in resin",
        year: "2023",
        summary: "Resin and wood sculpture of the Puget Sound topography, including the San Juan Islands and Hood Canal.",
        links: [
            { text: "Photo", url: "https://www.dropbox.com/scl/fi/ml7c4a15mfp15me28teju/2023-04-14-00.13.50-1.jpg?rlkey=2gjwdys0lpx1fvli41uv44ydt&st=zl1rpmww&dl=0" }
        ]
    },
    {
        id: "electric-sheep",
        title: "Electric Sheep",
        type: "DJ night posters x18",
        year: "2023",
        yearRange: "2023-2025",
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
        noContent: true
    },
    {
        id: "potato-man",
        title: "Potato Man",
        type: "Electronic-organic figurine",
        year: "2021",
        summary: "Action figurine of organic and electronic creature made from potatoes and computer parts.",
        noContent: true
    },
    {
        id: "fortune-calibrator",
        title: "Fortune Calibrator",
        type: "arcade fortune machine",
        year: "2020",
        yearRange: "2020–2021",
        summary: "Based on a classic fortune-telling machine, this installation presents a fortune based on choices and allows the user to vote on the what they received.",
        links: [
            { text: "Workshop", url: "https://doublejosh.com/post/656637761187627008/fortune-teller-workshop" },
            { text: "Instagram", url: "https://www.tinkercad.com/things/38c56EhGnLJ-coin-slot" },
        ]
    },
    {
        id: "upgrade-node",
        title: "Upgrade node",
        type: "interactive lighting",
        year: "2020",
        summary: "Interactive lighting installation with audio EQ responsive effects.",
        links: [
            { text: "Roof mount", url: "https://www.instagram.com/p/Bp2jY2slYzI/" },
            { text: "Back yard", url: "https://www.instagram.com/p/BoKX5ivF1ys/" }
        ]
    },
    {
        id: "youre-on-the-money",
        title: "You're On the Money",
        type: "Peep hole reflection engraving",
        year: "2020",
        summary: "Reflection-based engraving piece with peep hole viewing mechanism.",
        noContent: true
    },
    {
        id: "crystal-experiment",
        title: "Crystal Experiment",
        type: "arcade machine",
        year: "2020",
        summary: "Arcade-style slot machine interface with web backend to measure interactions.",
        links: [
            { text: "Photo", url: "https://www.dropbox.com/scl/fi/fgtod0hp2r1e3zekm1tuo/2019-12-13-00.00.57.jpg?rlkey=7vq2hilzhhb7jbou82f4acyme&st=l2n9p3ii&dl=0" },
            { text: "Series", url: "https://doublejosh.com/post/677646062958346240/fortune-teller-series-and-the-crystal-prediction" }
        ]
    },
    {
        id: "panels-of-futurescape",
        title: "Panels of Futurescape",
        type: "Animated panel series",
        year: "2020",
        summary: "Backlit coroplast panels to simulate servers racks and data center screens.",
        links : [
            { text: "Video", url: "hhttps://www.dropbox.com/scl/fi/7e2jzxwo496cjwvg3zpgz/2018-07-02-22.15.37.mov?rlkey=86p2x052aq1x8bwq0gogt4dof&st=ce9b5bqw&dl=0" },
            { test: "Dual display", url: "https://www.dropbox.com/scl/fi/ccwxzpdkndrkrfcxu9svc/2018-07-11-21.44.07.mov?rlkey=zigx52pwlmhd94y714f4364rw&st=e52bvjkt&dl=0" },
            { test: "Tech idols", url: "https://www.dropbox.com/scl/fi/3hyvnonlgx475mbd84aqr/2018-06-27-20.35.23-1.jpg?rlkey=64f7zm1zvgc2nj64h8q4dcakn&st=k17gyom9&dl=0" }
        ]
    },
    {
        id: "shy-bamboo",
        title: "Shy Bamboo",
        type: "interactive lighting",
        year: "2020",
        summary: "Interactive lighting installation with responsive addressable light strands elements.",
        noContent: true
    },
    {
        id: "pop-agenda",
        title: "POPAGENDA",
        type: "mobile popups",
        year: "2019",
        yearRange: "2019–present",
        summary: "This mini food-truck serves snacks and is a mobile DJ booth. The volunteer employees wear 1950s period costumes (hats, bow ties, and aprons) while giving away snacks. This piece has been to numerous PNW outdoor events.",
        links: [
            { text: "Sketches and photos", url: "https://doublejosh.com/post/184371658853/popagenda" },
            { text: "Seattle Center", url: "https://www.dropbox.com/scl/fi/5gmyd9drgistopzgnsco5/2023-10-08-02.09.29.jpg?rlkey=5z6a0cggaq8agmo2a3o4ggc14&st=od43iccp&dl=0" },
            { text: "popagenda.org", url: "https://popagenda.org/" },
            { text: "Instagram", url: "https://www.instagram.com/the_pop_agenda/" },
            { text: "Bag stamping", url: "https://www.dropbox.com/scl/fi/hkjvox27tq1zebjjsgqp1/2024-10-31-00.17.40.jpg?rlkey=cf86ju6d9txp8rnggmam37rlp&st=vtq1pdqj&dl=0" }
        ]
    },
    {
        id: "emmett",
        title: "Emmett",
        type: "open-source hover board",
        year: "2019",
        summary: "This was my effort to create a DIY one-wheel, self-balancing, electric skateboard. As the project progressed it became obvious this should be open-sourced. I was able to achieve decent accelerometer control and dealt with battery management, but got stuck handling the throttles of brushless electric motor controllers. I'd love to reboot this someday.",
        links: [
            { text: "Blog", url: "https://openemmett.tumblr.com/" },
            { text: "Instructions wiki", url: "https://github.com/doublejosh/emmett/wiki" }
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
            { text: "Gold on black", url: "https://www.dropbox.com/scl/fi/f6uyp1fmc3732v3texwve/2018-11-29-19.09.34.jpg?rlkey=5tpe7g1lr23i9g20q6wq4yn40&st=2yv2obvt&dl=0" }
        ]
    },
    {
        id: "final-approach-motel",
        title: "Final Approach Motel",
        type: "popup tiny bar",
        year: "2018",
        yearRange: "2018/19, 2024",
        summary: "An immersive tiny bar experience of a mid-century, un-scale, hotel lobby. This \"roach motel\" features morphing wallpaper, resin poured roach wing chandelier, and a stained wooden bar. The staff are dressed as cockroaches of course. This piece was installed at the Golden Guy Alley for several years in BRC.",
        links: [
            { text: "Website", url: "https://www.metafaux.com/finalapproachmotel/" },
            { text: "Instagram", url: "https://www.instagram.com/p/B2DfDh5JtLd/" },
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
        id: "interlocked-earings",
        title: "Interlocked Earings",
        type: "jewelery",
        year: "2015",
        summary: "3D-printed 20-sided geometric figures interlocked into hanging earrings.",
        noContent: true
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
            { text: "Installed #1", url: "http://www.youtube.com/watch?v=B_QpBHy1OX4" },
            { text: "Installed #2", url: "http://www.youtube.com/watch?v=ka-9o_Phb_I" },
            { text: "GitHub", url: "https://github.com/doublejosh/balloon_arch" }
        ]
    },
    {
        id: "numbers",
        title: "Secret Numbers",
        type: "Lots of secrets hiding in plain sight for the math nerds.",
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
        summary: "Board game depicting planets and spaceships with resource trading. The theme was cats and vampires.",
        noContent: true
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
        summary: "Commercial vinyl wall art business venture.",
        noContent: true
    }
];
