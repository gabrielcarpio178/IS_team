//get method
const urlParams = new URL(document.location).searchParams;
const get_type = urlParams.get('type');
if(get_type!=null){
    if(get_type=='levelluksd501'){
        //picture content
        var main_pic = "image/Screenshot (342) 1.png";
        var selected_image_data = "image/ultio.jpg";
        var image_content_1 = "image/sd501 2.png";
        var image_content_2 = "image/product-gallery-sd501-1-2x 1.png";
        var image_content_3 = "image/product-gallery-sd501-3 1.png";
        var image_content_4 = "image/product-gallery-sd501-4 1.png";

        var image_content_data_ = `
        <img class="leveltwo" src="${selected_image_data}" id="selected_image">
        <div class="site">
            <div class="siteImage selected-image" onclick="changeImage(this)" id="siteImage_1">
                <img class="image" src="${image_content_1}" id="image_content_1">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_2">
                <img class="image" src="${image_content_2}" id="image_content_2">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_3">
                <img class="image" src="${image_content_3}" id="image_content_3">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_4">
                <img class="image" src="${image_content_4}" id="image_content_4">
            </div>
        </div>
        `;

        //text content
        var label_text_ = "<u>The Ultimate Home Use Model (Original)</u>";
        var label_kanagen_ = "The SD501 is the finest machine in its class, with the highest quality built-in electrolysis chamber on the market.";
        var btn_info_1_ = "The Ultimate Home Use Model";
        var btn_info_2_ = "Large LCD panel";
        var btn_info_3_ = "7 Titanium Plates";
        var btn_info_4_ = "Compact";

        var btn_info_data_ = `
            <div class="btn-info-data" id="btn_info_1" onclick="displayModal('btn_info_1')" data-toggle="modal" data-target="#exampleModal">${btn_info_1_}</div>
            <div class="btn-info-data" id="btn_info_2" onclick="displayModal('btn_info_2')" data-toggle="modal" data-target="#exampleModal">${btn_info_2_}</div>
            <div class="btn-info-data" id="btn_info_3" onclick="displayModal('btn_info_3')" data-toggle="modal" data-target="#exampleModal">${btn_info_3_}</div>
            <div class="btn-info-data" id="btn_info_4" onclick="displayModal('btn_info_4')" data-toggle="modal" data-target="#exampleModal">${btn_info_4_}</div>
        `

        var content_show_1 = `
        <div class="list-mylinks">
            <b id="list_mylinks_1_label">
                User Friendly
            </b>
            <p id="list_mylinks_1_p">
                With just a touch of a button, you can have access to any of the 5 waters you choose.
            </p>
        </div>
        <div class="list-mylinks">
            <b id="list_mylinks_2_label">
                Voice Confirmations
            </b>
            <p id="list_mylinks_2_p">
                Your machine will confirm the water you have selected with a pleasant voice.
            </p>
        </div>
        <div class="list-mylinks">
            <b id="list_mylinks_3_label">
                Automatic Cleaning
            </b>
            <p id="list_mylinks_3_p">
                Periodically controlled by microcomputer.
            </p>
        </div>
        <div class="list-mylinks">
            <b id="list_mylinks_4_label">
                Smart Filter Technology
            </b>
            <p id="list_mylinks_4_p">
                Let your machine tell you when it's time to change filters.
            </p>
        </div>
        `;
        var content_show_2 = `
            <div class="label-data" id="label_data_1">
                <b>Electrode plates:</b> <span>7</span>
            </div>
            <div class="label-data" id="label_data_2">
                <b>Plate size:</b> <span>(mm)	135 x 75</span>
            </div>
            <div class="label-data" id="label_data_3">
                <b>Negative ORP:</b> <span>(mV)	-631</span>
            </div>
            <div class="label-data" id="label_data_4">
                <b>pH Range:</b> <span>2.5 - 11.5</span>
            </div>
            <div class="label-data" id="label_data_5">
                <b>Generates:</b> <span>5 water types</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Total weight:</b><span>(kg)	6.3</span>
            </div>
            <div class="label-data" id="label_data_7">
                <b>Dimensions WHD:</b><span>(mm) 264 x 338 x 171</span>
            </div>
            <div class="label-data" id="label_data_8">
                <b>Production rate:</b> <span>(l/min)	Kangen Water®: 4.5 - 7.6 Acidic Water: 1.5 - 2.6 Strong Acidic Water: 0.6 - 1.1</span>
            </div>
            <div class="label-data" id="label_data_9">
                <b>Ease of Use:</b><span>Fully automatic, very simple to operate</span>
            </div>
            <div class="label-data" id="label_data_10">
                <b>Languages:</b><span>5</span>
            </div>
            <div class="label-data" id="label_data_11">
                <b>Warranty:</b><span>(years)	5</span>
            </div>
        `;
        var content_text_label_ = 'The SD501 is the "Flagship" model and #1 Seller!';
        var content_text_label_2_ = "Product Specifications";
        var enagic_img_1 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_1 = "image/product-img-sd501-1 1.png";
        var powers_text_1 = '<h2>The Ultimate Home Use Model</h2><p>The SD501 is the finest machine in its class, with the highest quality built-in electrolysis chamber on the market. This Kangen Water® filtration machine generates a continuous stream of 5 types of water. Generates: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water.</p>';
        
        var enagic_img_2 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_2 = "image/product-img-sd501-2 1.png";
        var powers_text_2 = ' <h2>Large LCD panel</h2><p>You can easily operate the SD501 thanks to a large LCD panel and clear voice prompts. When you need enough delicious, healthy alkaline water to hydrate your whole family, the SD501 is the product you\'ve been searching for!</p>';
        
        var enagic_img_3 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_3 = "image/content-img-product-plates 1 (1).png";
        var powers_text_3 = '<h2 class="lcd">7 Titanium Plates</h2><p>The SD501 is Enagi\'s "Flagship" model because it provides additional stable oxygen, better micro-clustering, and higher negative ORP levels. Like all 501 models, the SD501 uses innovative electrolysis technology with 7 platinum-coated 99.97% pure titanium electrode plates.</p>';

        var enagic_img_4 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_4 = "image/product-img-sd501-3 1.png";
        var powers_text_4 = ' <h2 class="lcd">Compact</h2><p>Although it is incredibly powerful, the SD501 is also very compact and perfectly suitable for your kitchen cabinet.</p>';
    }else if(get_type=='levellukk8'){
        //picture content
        var main_pic = "image/Screenshot (338) 1.png";
        var selected_image_data = "image/s-l1200 1.png";
        var image_content_1 = "image/product-gallery-k8-1-2x 1.png";
        var image_content_2 = "image/product-gallery-k8-2-2x 1.png";
        var image_content_3 = "image/product-gallery-k8-3-2x 1.png";
        var image_content_4 = "image/product-gallery-k8-4-2x 1.png";

        var image_content_data_ = `
        <img class="leveltwo" src="${selected_image_data}" id="selected_image">
        <div class="site">
            <div class="siteImage selected-image" onclick="changeImage(this)" id="siteImage_1">
                <img class="image" src="${image_content_1}" id="image_content_1">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_2">
                <img class="image" src="${image_content_2}" id="image_content_2">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_3">
                <img class="image" src="${image_content_3}" id="image_content_3">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_4">
                <img class="image" src="${image_content_4}" id="image_content_4">
            </div>
        </div>
        `;

        //text content
        var label_text_ = "<u>THE MIGHTY 8-PLATE ANTI-OXIDIZER</u>";
        var label_kanagen_ = "The K8 (Kangen 8) is now Enagic's most powerful antioxidant machine - featuring 8 platinum-dipped titanium plates! This additional electrode plate increases the electrolysis surface area, improves water ionization, and heightens the antioxidant production potential.";
        var btn_info_1_ = "Higher Antioxidant Power";
        var btn_info_2_ = "Full Color LCD Panel";
        var btn_info_3_ = "8 Titanium Plates";
        var btn_info_4_ = "Speaks EIGHT Languages";

        var btn_info_data_ = `
            <div class="btn-info-data" id="btn_info_1" onclick="displayModal('btn_info_1')" data-toggle="modal" data-target="#exampleModal">${btn_info_1_}</div>
            <div class="btn-info-data" id="btn_info_2" onclick="displayModal('btn_info_2')" data-toggle="modal" data-target="#exampleModal">${btn_info_2_}</div>
            <div class="btn-info-data" id="btn_info_3" onclick="displayModal('btn_info_3')" data-toggle="modal" data-target="#exampleModal">${btn_info_3_}</div>
            <div class="btn-info-data" id="btn_info_4" onclick="displayModal('btn_info_4')" data-toggle="modal" data-target="#exampleModal">${btn_info_4_}</div>
        `

        var content_show_1 = `
        <div class="list-mylinks">
            <b>Auto On/Off</b>
            <p>The smart Kangen® shuts down on its own to conserve energy</p>
        </div>
        <div class="list-mylinks">
            <b>Plug & Play</b>
            <p>No more switch! Just plug the machine in and start generating water.</p>
        </div>
        <div class="list-mylinks">
            <b>Automatic Cleaning</b>
            <p>Water drains for 10 seconds after 10 minutes of use</p>
        </div>
        <div class="list-mylinks">
            <b>Smart Filter Technology</b>
            <p>Let your machine tell you when it's time to change filters</p>
        </div>
        `;
        var content_show_2 = `
            <div class="label-data" id="label_data_1">
                <b>Electrode plates:</b> <span>8</span>
            </div>
            <div class="label-data" id="label_data_2">
                <b>Plate size:</b> <span>(mm)	135 x 75</span>
            </div>
            <div class="label-data" id="label_data_3">
                <b>Negative ORP:</b> <span>(mV)	-722</span>
            </div>
            <div class="label-data" id="label_data_4">
                <b>pH Range:</b> <span>2.5 - 11.5</span>
            </div>
            <div class="label-data" id="label_data_5">
                <b>Generates:</b> <span>5 water types</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Wattage</b><span> (W)	230</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Total weight:</b><span>(kg)	5</span>
            </div>
            <div class="label-data" id="label_data_7">
                <b>Dimensions WHD:</b><span>(mm)	279 x 345 x 147</span>
            </div>
            <div class="label-data" id="label_data_8">
                <b>Production rate:</b> <span> (l/min)	Kangen Water®: 4.5 - 7.6
                Acidic Water: 1.5 - 2.6
                Strong Acidic Water: 0.6 - 1.1</span>
            </div>
            <div class="label-data" id="label_data_9">
                <b>Ease of Use:</b><span>Fully automatic, very simple to operate</span>
            </div>
            <div class="label-data" id="label_data_10">
                <b>Languages:</b><span>8</span>
            </div>
            <div class="label-data" id="label_data_11">
                <b>Warranty:</b><span>(years)	5</span>
            </div>
        `;

        var content_text_label_ = 'The K8 is full of new user-friendly features!';
        var content_text_label_2_ = "Product Specifications";

        var enagic_img_1 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_1 = "image/content-img-product-11 1.png";
        var powers_text_1 = '<h2>Higher Antioxidant Power</h2><p>The mighty K8 is a mighty antioxidant producer! The K8 water ionizer generates a continuous stream of 5 versatile types of water to meet all your versatile commercial needs: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water.</p>';
        
        var enagic_img_2 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_2 = "image/content-img-product-12 1.png";
        var powers_text_2 = ' <h2>Full Color LCD Panel</h2><p>The K8 is extremely user-friendly, thanks to a large full color LCD panel and clear voice prompts. With just a touch of a button, you can have access to any of the 5 waters you choose. Your machine will confirm the water you have selected with a pleasant voice, and in moments the machine will generate healthy, ionized water through a flexible pipe.</p>';
        
        var enagic_img_3 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_3 = "image/content-img-product-plates 1.png";
        var powers_text_3 = '<h2 class="lcd">8 Titanium Plates</h2><p>The K8 is similar to Enagic\'s Flagship SD501, but it contains an extra platinum-coated titanium plate. The additional plate means improved water ionization, increase antioxidant production potential, and stable production of pH and ORP at a higher flow rate. The K8 is great for small businesses and families.</p>';

        var enagic_img_4 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_4 = "image/content-img-product-14 1.png";
        var powers_text_4 = ' <h2 class="lcd">Speaks EIGHT Languages!</h2><p>8 Language Display and Audio in Japanese, English, French, German, Chinese, Italian, Spanish and Portuguese</p>';
    }else if(get_type=='leveluksd501p'){
        //picture content
        var main_pic = "image/ultimatep.png";
        var selected_image_data = "image/22.jpg";
        var image_content_1 = "image/product-gallery-sd501p-1.jpg";
        var image_content_2 = "image/product-gallery-sd501p-2.jpg";
        var image_content_3 = "image/product-gallery-sd501p-3.jpg";
        var image_content_4 = "image/product-gallery-sd501p-4.jpg";

        var image_content_data_ = `
        <img class="leveltwo" src="${selected_image_data}" id="selected_image">
        <div class="site">
            <div class="siteImage selected-image" onclick="changeImage(this)" id="siteImage_1">
                <img class="image" src="${image_content_1}" id="image_content_1">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_2">
                <img class="image" src="${image_content_2}" id="image_content_2">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_3">
                <img class="image" src="${image_content_3}" id="image_content_3">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_4">
                <img class="image" src="${image_content_4}" id="image_content_4">
            </div>
        </div>
        `;

        //text content
        var label_text_ = "<u style='white-space: nowrap;'>The Ultimate Home Use Model (Platinum)</u>";
        var label_kanagen_ = "The SD501 is the finest machine in its class, with the highest quality built-in electrolysis chamber on the market. This is the Platinum version.";
        var btn_info_1_ = "Powerful Performance";
        var btn_info_2_ = "Large LCD panel";
        var btn_info_3_ = "7 Titanium Plates";
        var btn_info_4_ = "Speaks FIVE Languages";

        var btn_info_data_ = `
            <div class="btn-info-data" id="btn_info_1" onclick="displayModal('btn_info_1')" data-toggle="modal" data-target="#exampleModal">${btn_info_1_}</div>
            <div class="btn-info-data" id="btn_info_2" onclick="displayModal('btn_info_2')" data-toggle="modal" data-target="#exampleModal">${btn_info_2_}</div>
            <div class="btn-info-data" id="btn_info_3" onclick="displayModal('btn_info_3')" data-toggle="modal" data-target="#exampleModal">${btn_info_3_}</div>
            <div class="btn-info-data" id="btn_info_4" onclick="displayModal('btn_info_4')" data-toggle="modal" data-target="#exampleModal">${btn_info_4_}</div>
        `

        var content_text_label_ = 'The K8 is full of new user-friendly features!';
        var content_text_label_2_ = "Product Specifications";

        var content_show_1 = `
        <div class="list-mylinks">
            <b>User Friendly</b>
            <p>With just a touch of a button, you can have access to any of the 5 waters you choose.</p>
        </div>
        <div class="list-mylinks">
            <b>Voice Confirmations</b>
            <p>Your machine will confirm the water you have selected with a pleasant voice.</p>
        </div>
        <div class="list-mylinks">
            <b>Automatic Cleaning</b>
            <p>Periodically controlled by microcomputer.</p>
        </div>
        <div class="list-mylinks">
            <b>Smart Filter Technology</b>
            <p>Let your machine tell you when it's time to change filters!</p>
        </div>
        `;
        var content_show_2 = `
            <div class="label-data" id="label_data_1">
                <b>Electrode plates:</b> <span>7</span>
            </div>
            <div class="label-data" id="label_data_2">
                <b>Plate size:</b> <span>(mm)	135 x 75</span>
            </div>
            <div class="label-data" id="label_data_3">
                <b>Negative ORP:</b> <span>(mV)	-631</span>
            </div>
            <div class="label-data" id="label_data_4">
                <b>pH Range:</b> <span>2.5 - 11.5</span>
            </div>
            <div class="label-data" id="label_data_5">
                <b>Generates:</b> <span>5 water types</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Wattage</b><span> (W)	230</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Total weight:</b><span>(kg)	6.3</span>
            </div>
            <div class="label-data" id="label_data_7">
                <b>Dimensions WHD:</b><span>(mm)	264 x 338 x 171</span>
            </div>
            <div class="label-data" id="label_data_8">
                <b>Production rate:</b> <span> (l/min)	Kangen Water®: 4.5 - 7.6
                Acidic Water: 1.5 - 2.6
                Strong Acidic Water: 0.6 - 1.1</span>
            </div>
            <div class="label-data" id="label_data_9">
                <b>Ease of Use:</b><span>Fully automatic, very simple to operate</span>
            </div>
            <div class="label-data" id="label_data_10">
                <b>Languages:</b><span>5</span>
            </div>
            <div class="label-data" id="label_data_11">
                <b>Warranty:</b><span>(years)	5</span>
            </div>
        `;

        var enagic_img_1 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_1 = "image/product-img-15.jpg";
        var powers_text_1 = '<h2>Powerful Performance</h2><p>The all new Platinum features a revamped modern design that coordinates beautifully with today\'s stylish kitchens. It has the same powerful performance in an all-new package. Smart New Look, Same Reliability! Generates: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water.</p>';
        
        var enagic_img_2 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_2 = "image/product-img-16.jpg";
        var powers_text_2 = ' <h2>Large LCD panel</h2><p>The SD501 is extremely user-friendly, thanks to a large LCD panel and clear voice prompts. With just a touch of a button, you can have access to any of the 5 waters you choose. Your machine will confirm the water you have selected with a pleasant voice, and in moments the machine will generate healthy, ionized water through a flexible pipe.</p>';
        
        var enagic_img_3 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_3 = "image/content-img-product-plates 1.png";
        var powers_text_3 = '<h2 class="lcd">7 Titanium Plates</h2><p>The secret is contained inside, with seven platinum-coated titanium plates. You can easily access 1.2 to 2 gallons of delicious and wholesome Kangen Water® a minute from this fully-automatic process.</p>';

        var enagic_img_4 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_4 = "image/product-img-18.jpg";
        var powers_text_4 = ' <h2 class="lcd">Speaks FIVE Languages!</h2><p>The Multi-Language SD501 Platinum expertly "speaks" in 5 languages: English, German, French, Italian and Spanish!</p>';
    }else if(get_type=='levelukjrv4'){
        //picture content
        var main_pic = "image/jrmodel.png";
        var selected_image_data = "image/jrm.jpg";
        var image_content_1 = "image/product-gallery-jr4-1.jpg";
        var image_content_2 = "image/product-img-jr4-2-2x (2).png";
        var image_content_3 = "image/product-img-jr4-1-2x (1).jpg";
        var image_content_4 = "image/product-img-jr4-electrolysis (1).jpg";

        var image_content_data_ = `
        <img class="leveltwo" src="${selected_image_data}" id="selected_image">
        <div class="site">
            <div class="siteImage selected-image" onclick="changeImage(this)" id="siteImage_1">
                <img class="image" src="${image_content_1}" id="image_content_1">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_2">
                <img class="image" src="${image_content_2}" id="image_content_2">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_3">
                <img class="image" src="${image_content_3}" id="image_content_3">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_4">
                <img class="image" src="${image_content_4}" id="image_content_4">
            </div>
        </div>
        `;

        //text content
        var label_text_ = "<u>The Junior Model</u>";
        var label_kanagen_ = "The JrIV has four solid electrode plates which reduces the energy consumption. Due to the solid platinum-coated titanium plates, this unit can still produce the strong acid and strong Kangen waters.";
        var btn_info_1_ = "The Junior Model";
        var btn_info_2_ = "Super Easy to Use";
        var btn_info_3_ = "4 Titanium Plates";
        var btn_info_4_ = "Electrolysis Enhancer Tank";

        var btn_info_data_ = `
            <div class="btn-info-data" id="btn_info_1" onclick="displayModal('btn_info_1')" data-toggle="modal" data-target="#exampleModal">${btn_info_1_}</div>
            <div class="btn-info-data" id="btn_info_2" onclick="displayModal('btn_info_2')" data-toggle="modal" data-target="#exampleModal">${btn_info_2_}</div>
            <div class="btn-info-data" id="btn_info_3" onclick="displayModal('btn_info_3')" data-toggle="modal" data-target="#exampleModal">${btn_info_3_}</div>
            <div class="btn-info-data" id="btn_info_4" onclick="displayModal('btn_info_4')" data-toggle="modal" data-target="#exampleModal">${btn_info_4_}</div>
        `

        var content_text_label_ = 'Starter model recommended only for singles or couples';
        var content_text_label_2_ = "Product Specifications";
        var content_show_1 = `
        <div class="list-mylinks">
            <b>User Friendly</b>
            <p>With just a touch of a button, you can have access to any of the 4 waters you choose.</p>
        </div>
        <div class="list-mylinks">
            <b>Automatic Cleaning</b>
            <p>Periodically controlled by microcomputer.</p>
        </div>
        <div class="list-mylinks">
            <b>Smart Filter Technology</b>
            <p>Let your machine tell you when it's time to change filters</p>
        </div>
        `;
        var content_show_2 = `
            <div class="label-data" id="label_data_1">
                <b>Electrode plates:</b> <span>4</span>
            </div>
            <div class="label-data" id="label_data_2">
                <b>Plate size:</b> <span>(mm)	135 x 75</span>
            </div>
            <div class="label-data" id="label_data_3">
                <b>Negative ORP:</b> <span>(mV)	-450</span>
            </div>
            <div class="label-data" id="label_data_4">
                <b>pH Range:</b> <span>2.5 - 11.5</span>
            </div>
            <div class="label-data" id="label_data_5">
                <b>Generates:</b> <span>5 water types</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Wattage</b><span> (W)	120</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Total weight:</b><span> (kg)	5.3</span>
            </div>
            <div class="label-data" id="label_data_7">
                <b>Dimensions WHD:</b><span>(mm)	264 x 338 x 171</span>
            </div>
            <div class="label-data" id="label_data_8">
                <b>Production rate:</b> <span> (l/min)	Kangen Water®: 3.0 - 4.9
                Acidic Water: 0.2 - 1.9
                Strong Acidic Water: 0.3 - 0.7</span>
            </div>
            <div class="label-data" id="label_data_9">
                <b>Ease of Use:</b><span>Fully automatic unit</span>
            </div>
            <div class="label-data" id="label_data_10">
                <b>Languages:</b><span>1</span>
            </div>
            <div class="label-data" id="label_data_11">
                <b>Warranty:</b><span>(years)	3</span>
            </div>
        `;


        var enagic_img_1 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_1 = "image/product-img-jr4-1-2x.jpg";
        var powers_text_1 = '<h2>The Junior Model</h2><p>The JrIV has four solid electrode plates, which reduces the energy consumption. Due to the lower power consumption and fewer plates, this machine is considered one of Enagic\'s "starter" models. Generates: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water.</p>';
        
        var enagic_img_2 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_2 = "image/product-img-jr4-2-2x.png";
        var powers_text_2 = ' <h2>Super Easy to Use</h2><p>With just a touch of a button, you can have access to any of the 4 waters you choose. Your machine will confirm the water you have selected and in moments the machine will generate healthy, ionized water. Your JrIV will even notify you when it\'s time to change the water filter via a message on the LCD Panel and a buzzer sound.</p>';
        
        var enagic_img_3 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_3 = "image/content-img-product-plates.jpg";
        var powers_text_3 = '<h2 class="lcd">4 Titanium Plates</h2><p>The JrIV has four solid electrode plates which reduces the energy consumption. Due to the solid platinum-coated titanium plates, this unit can still produce the strong acid and strong Kangen waters. Due to the lower power consumption and fewer plates, this machine is only recommended for singles or couples.</p>';

        var enagic_img_4 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_4 = "image/product-img-jr4-electrolysis.jpg";
        var powers_text_4 = ' <h2 class="lcd">The built-in tank for the electrolysis enhancer saves you the trouble of putting in the electrolysis enhancer which is necessary to obtain strong acid water and strong Kangen Water, and allows you to produce those kinds of water steadily and continuously that has excellent effects.</p>';
    }else if(get_type=='super_leveluk501'){
        //picture content
        var main_pic = "image/501.png";
        var selected_image_data = "image/super501.jpg";
        var image_content_1 = "image/super501-1.jpg";
        var image_content_2 = "image/super501-2.jpg";
        var image_content_3 = "image/super501-3.jpg";
        var image_content_4 = "image/product-gallery-super501-4-2x.jpg";

        var image_content_data_ = `
        <img class="leveltwo" src="${selected_image_data}" id="selected_image">
        <div class="site">
            <div class="siteImage selected-image" onclick="changeImage(this)" id="siteImage_1">
                <img class="image" src="${image_content_1}" id="image_content_1">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_2">
                <img class="image" src="${image_content_2}" id="image_content_2">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_3">
                <img class="image" src="${image_content_3}" id="image_content_3">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_4">
                <img class="image" src="${image_content_4}" id="image_content_4">
            </div>
        </div>
        `;

        //text content
        var label_text_ = "<u>For Super Heavy Use</u>";
        var label_kanagen_ = "This highly productive machine has 7 and 5 electrode plates, a twin hose system, industry leading cleaning system, a built-in tank for the electrolysis enhancer, and a water pressure regulating function making this machine a must for the large family!";
        var btn_info_1_ = "For Super Heavy Use";
        var btn_info_2_ = "Super Easy to Use";
        var btn_info_3_ = "12 Titanium Plates";
        var btn_info_4_ = "Industrial Strength";

        var btn_info_data_ = `
            <div class="btn-info-data" id="btn_info_1" onclick="displayModal('btn_info_1')" data-toggle="modal" data-target="#exampleModal">${btn_info_1_}</div>
            <div class="btn-info-data" id="btn_info_2" onclick="displayModal('btn_info_2')" data-toggle="modal" data-target="#exampleModal">${btn_info_2_}</div>
            <div class="btn-info-data" id="btn_info_3" onclick="displayModal('btn_info_3')" data-toggle="modal" data-target="#exampleModal">${btn_info_3_}</div>
            <div class="btn-info-data" id="btn_info_4" onclick="displayModal('btn_info_4')" data-toggle="modal" data-target="#exampleModal">${btn_info_4_}</div>
        `

        var content_text_label_ = 'Top of the line model for heavy home or small business use';
        var content_text_label_2_ = "Product Specifications";
        var content_show_1 = `
        <div class="list-mylinks">
            <b>User Friendly</b>
            <p>With just a touch of a button, you can have access to any of the 5 waters you choose.</p>
        </div>
        <div class="list-mylinks">
            <b>Industrial Strength</b>
            <p>Generate up to 2 gallons of water a minute.</p>
        </div>
        <div class="list-mylinks">
            <b>Automatic Cleaning</b>
            <p>Periodically controlled by microcomputer.</p>
        </div>
        <div class="list-mylinks">
            <b>Smart Filter Technology</b>
            <p>Let your machine tell you when it's time to change filters.</p>
        </div>
        `;
        var content_show_2 = `
            <div class="label-data" id="label_data_1">
                <b>Electrode plates:</b> <span>7 & 5</span>
            </div>
            <div class="label-data" id="label_data_2">
                <b>Plate size:</b> <span> (mm)	135 x 75</span>
            </div>
            <div class="label-data" id="label_data_3">
                <b>Negative ORP:</b> <span>(mV)	-800</span>
            </div>
            <div class="label-data" id="label_data_4">
                <b>pH Range:</b> <span>2.5 - 11.5</span>
            </div>
            <div class="label-data" id="label_data_5">
                <b>Generates:</b> <span>5 water types</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Wattage</b><span> (W)	200</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Total weight:</b><span> (kg)	10.1</span>
            </div>
            <div class="label-data" id="label_data_7">
                <b>Dimensions WHD:</b><span>(mm)	279 x 345 x 147</span>
            </div>
            <div class="label-data" id="label_data_8">
                <b>Production rate:</b> <span> (l/min)	Kangen Water®: 4.9 - 7.9
                Acidic Water: 1.9 - 3.0
                Strong Acidic Water: 1.1 - 3.0</span>
            </div>
            <div class="label-data" id="label_data_9">
                <b>Ease of Use:</b><span>Fully automatic, very simple to operate</span>
            </div>
            <div class="label-data" id="label_data_10">
                <b>Languages:</b><span>1</span>
            </div>
            <div class="label-data" id="label_data_11">
                <b>Warranty:</b><span>(years)	3</span>
            </div>
        `;


        var enagic_img_1 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_1 = "image/product-super501-1.jpg";
        var powers_text_1 = '<h2>For Super Heavy Use</h2><p>This powerful Enagic machine is a large family unit, and the top of the line model for heavy home use or for small businesses. Nursing homes, agricultural colleges, and spas can all benefit greatly by having the high-performance Super501! Generates: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water.</p>';
        
        var enagic_img_2 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_2 = "image/product-super501-2.jpg";
        var powers_text_2 = ' <h2>Super Easy to Use</h2><p>With just a touch of a button, you can have access to any of the 5 waters you choose. Your machine will confirm the water you have selected, and in moments the machine will generate healthy, ionized water. Your SUPER501 will even notify you when it\'s time to change the water filter via a message on the LCD Panel and a buzzer sound.</p>';
        
        var enagic_img_3 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_3 = "image/content-img-product-plates.jpg";
        var powers_text_3 = '<h2 class="lcd">12 Titanium Plates</h2><p>With 12 platinum-coated 99.97% pure titanium electrode plates, this highly productive machine generates all 5 different types of Enagic water (see below) for countless uses around your home or business. If you\'re looking for a super-sized SD501, the Super501 is exactly what you need.</p>';

        var enagic_img_4 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_4 = "image/super501-3.jpg";
        var powers_text_4 = ' <h2 class="lcd">Industrial Strength</h2><p>The Super501 features the same quality built-in electrolysis enhancer tank as the SD501, and can generate up to 2 gallons of water a minute for approximately 30 minutes at a time, so you will never run out of the water you need to run your business. This hefty machine also boasts 2 flexible pipes - one specifically designed for Kangen Water® and the one for Beauty Water.</p>';
    }else if(get_type=='leveluksd501u'){
        //picture content
        var main_pic = "image/undercounter.png";
        var selected_image_data = "image/product-gallery-sd501u-1.jpg";
        var image_content_1 = "image/product-gallery-sd501u-1.jpg";
        var image_content_2 = "image/product-gallery-sd501u-2.jpg";
        var image_content_data_ = `
        <img class="leveltwo" src="${selected_image_data}" id="selected_image">
        <div class="site">
            <div class="siteImage selected-image" onclick="changeImage(this)" id="siteImage_1">
                <img class="image" src="${image_content_1}" id="image_content_1">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_2">
                <img class="image" src="${image_content_2}" id="image_content_2">
            </div>
        </div>
        `;

        //text content
        var label_text_ = "<u>The Under-The-Counter Model</u>";
        var label_kanagen_ = "If you could use a little more free counter space, this is the perfect unit for your kitchen! With the quality and power of the SD501, but the convenience of nestling discreetly under your sink.";
        var btn_info_1_ = "Quality and Power";
        var btn_info_2_ = "Wall-Mounted LCD Control Panel";
        var btn_info_3_ = "7 Titanium Plates";

        var btn_info_data_ = `
            <div class="btn-info-data" id="btn_info_1" onclick="displayModal('btn_info_1')" data-toggle="modal" data-target="#exampleModal">${btn_info_1_}</div>
            <div class="btn-info-data" id="btn_info_2" onclick="displayModal('btn_info_2')" data-toggle="modal" data-target="#exampleModal">${btn_info_2_}</div>
            <div class="btn-info-data" id="btn_info_3" onclick="displayModal('btn_info_3')" data-toggle="modal" data-target="#exampleModal">${btn_info_3_}</div>
        `

        var content_text_label_ = 'Both practical and highly accomodating';
        var content_text_label_2_ = "Product Specifications";
        var content_show_1 = `
        <div class="list-mylinks">
            <b>User Friendly</b>
            <p>With just a touch of a button, you can have access to any of the 5 waters you choose.</p>
        </div>
        <div class="list-mylinks">
            <b>Voice Confirmations</b>
            <p>Your machine will confirm the water you have selected with a pleasant voice. </p>
        </div>
        <div class="list-mylinks">
            <b>Smart Filter Technology</b>
            <p>Let your machine tell you when it's time to change filters</p>
        </div>
        `;
        var content_show_2 = `
            <div class="label-data" id="label_data_1">
                <b>Electrode plates:</b> <span>7</span>
            </div>
            <div class="label-data" id="label_data_2">
                <b>Plate size:</b> <span> (mm) 135 x 75</span>
            </div>
            <div class="label-data" id="label_data_3">
                <b>Negative ORP:</b> <span>(mV) -631</span>
            </div>
            <div class="label-data" id="label_data_4">
                <b>pH Range:</b> <span> 2.5-11.5</span>
            </div>
            <div class="label-data" id="label_data_5">
                <b>Generates:</b> <span>5 water types</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Wattage</b><span> (W)	230</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Total weight:</b><span> (kg)	5</span>
            </div>
            <div class="label-data" id="label_data_7">
                <b>Dimensions WHD:</b><span>(mm)	264 x 338 x 171</span>
            </div>
            <div class="label-data" id="label_data_8">
                <b>Production rate:</b> <span> (l/min)  Kangen Water: 4.5-7.6 Acidic Water: 1.5-2.6 Strong Acidic Water: 0.6-1.1</span>
            </div>
            <div class="label-data" id="label_data_9">
                <b>Ease of Use:</b><span>Fully Automatic, very simple to operate</span>
            </div>
            <div class="label-data" id="label_data_10">
                <b>Languages:</b><span>1</span>
            </div>
            <div class="label-data" id="label_data_11">
                <b>Warranty:</b><span>(years)	5</span>
            </div>
        `;


        var enagic_img_1 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_1 = "image/product-img-sd501u-1.jpg";
        var powers_text_1 = '<h2>Quality and Power</h2><p>Enjoy the quality and power of the SD501 right at your kitchen sink - without sacrificing valuable counter space! Generates: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water.';
        
        var enagic_img_2 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_2 = "image/product-img-sd501u-2.jpg";
        var powers_text_2 = ' <h2>Wall-Mounted LCD Control Panel</h2><pYou will still enjoy a fully featured, compact LCD control panel that is wall-mounted.</p>';
        
        var enagic_img_3 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_3 = "image/content-img-product-plates.jpg";
        var powers_text_3 = '<h2 class="lcd">7 Titanium Plates</h2><p>Like all 501 models, the SD501 uses innovative electrolysis technology with 7 platinum-coated 99.97% pure titanium electrode plates.</p>';

        var enagic_img_4 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_4 = "image/super501-3.jpg";
        var powers_text_4 = ' <h2 class="lcd">Industrial Strength</h2><p>The Super501 features the same quality built-in electrolysis enhancer tank as the SD501, and can generate up to 2 gallons of water a minute for approximately 30 minutes at a time, so you will never run out of the water you need to run your business. This hefty machine also boasts 2 flexible pipes - one specifically designed for Kangen Water® and the one for Beauty Water.</p>';
    }else if(get_type=='anespadx'){
        //picture content
        var main_pic = "image/anesdadx.png";
        var selected_image_data = "image/anespa.png";
        var image_content_1 = "image/anespa-1 1.png";
        var image_content_2 = "image/spa2.png";
        var image_content_3 = "image/spa3.png";
        var image_content_data_ = `
        <img class="leveltwo" src="${selected_image_data}" id="selected_image">
        <div class="site">
            <div class="siteImage selected-image" onclick="changeImage(this)" id="siteImage_1">
                <img class="image" src="${image_content_1}" id="image_content_1">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_2">
                <img class="image" src="${image_content_2}" id="image_content_2">
            </div>
            <div class="siteImage" onclick="changeImage(this)" id="siteImage_2">
            <img class="image" src="${image_content_3}" id="image_content_3">
        </div>
        </div>
        `;

        //text content
        var label_text_ = "<u>Mineral Ion Water Spa</u>";
        var label_kanagen_ = "The exclusive ANESPA Home Spa System transforms your ordinary bathroom into a natural hot spring resort.";
        var btn_info_1_ = "Your Home Spa System";
        var btn_info_2_ = "Remove Harmful Substances";
        var btn_info_3_ = "Mineral Ion Water";

        var btn_info_data_ = `
            <div class="btn-info-data" id="btn_info_1" onclick="displayModal('btn_info_1')" data-toggle="modal" data-target="#exampleModal">${btn_info_1_}</div>
            <div class="btn-info-data" id="btn_info_2" onclick="displayModal('btn_info_2')" data-toggle="modal" data-target="#exampleModal">${btn_info_2_}</div>
            <div class="btn-info-data" id="btn_info_3" onclick="displayModal('btn_info_3')" data-toggle="modal" data-target="#exampleModal">${btn_info_3_}</div>
        `

        var content_text_label_ = 'Top of the line model for heavy home or small business use';
        var content_text_label_2_ = "Product Specifications";
        var content_show_1 = `
        <div class="list-mylinks">
            <b>User Friendly</b>
            <p>With just a touch of a button, you can have access to any of the 5 waters you choose.</p>
        </div>
        <div class="list-mylinks">
            <b>Industrial Strength</b>
            <p>Generates up to 2 gallons of water a minute. </p>
        </div>
        <div class="list-mylinks">
            <b>Automatic Cleaning</b>
            <p>Periodically controlled by microcomputer</p>
        </div>
        <div class="list-mylinks">
            <b>Smart Filter Technology</b>
            <p>Let your machine tell you when it's time to change filters</p>
        </div>
        `;
        var content_show_2 = `
            <div class="label-data" id="label_data_1">
                <b>Electrode plates:</b> <span>N/A</span>
            </div>
            <div class="label-data" id="label_data_2">
                <b>Plate size:</b> <span> (mm) N/A</span>
            </div>
            <div class="label-data" id="label_data_3">
                <b>Generates:</b> <span>Mineral ion water for your bath or shower</span>
            </div>
            <div class="label-data" id="label_data_4">
                <b>pH Range:</b> <span>  Same as tap water</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Wattage</b><span> (W)	N/A</span>
            </div>
            <div class="label-data" id="label_data_6">
                <b>Total weight:</b><span> (kg)	2.5</span>
            </div>
            <div class="label-data" id="label_data_7">
                <b>Dimensions WHD:</b><span>(mm)	130 x 346</span>
            </div>
            <div class="label-data" id="label_data_8">
                <b>Production rate:</b> <span> (l/min) 2.6</span>
            </div>
            <div class="label-data" id="label_data_9">
                <b>Ease of Use:</b><span>Very simple to install and operate</span>
            </div>
            <div class="label-data" id="label_data_10">
                <b>New features for DX model:</b><span>Larger ceramic cartridge containing a greater amount of ceramic balls. New, redesigned base for a more effecient filter replacement process.</span>
            </div>
            <div class="label-data" id="label_data_11">
                <b>Warranty:</b><span>(years)3</span>
            </div>
        `;


        var enagic_img_1 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_1 = "image/spa.jpg";
        var powers_text_1 = '<h2>Your Home Spa System</h2><p>Treat yourself to a soothing hot spring experience with the ANESPA DX! With an abundant flow of mineralized water and a relaxing massage shower head, your bathroom can instantly turn into a calming hot spring oasis. Generates: Mineral ion water for your bath or shower.';
        
        var enagic_img_2 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_2 = "image/harmful.png";
        var powers_text_2 = ' <h2>Removes Harmful Substances</h2><p>The cartridge purification system effectively removes chlorine and bacteria, leaving you with a fresh, invigorating feeling. Protect your delicate skin from the harmful effects of tap water. Active charcoal filter Futama-ceramic inner filter.</p>';
        
        var enagic_img_3 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_3 = "image/mineral_ion.png";
        var powers_text_3 = '<h2 class="lcd">Mineral Ion Water</h2><p> Contains a blend of natural hot spring ingredients and minerals, giving you the feeling that you\'re enjoying a pleasant hot spring and taking advantage of the mineral ion water. Relax and enjoy!</p>';

        var enagic_img_4 = "image/Screenshot__297_-removebg-preview 2.png";
        var enagic_modal_img_4 = "image/content-img-product-14 1.png";
        var powers_text_4 = ' <h2 class="lcd">Speaks EIGHT Languages!</h2><p>8 Language Display and Audio in Japanese, English, French, German, Chinese, Italian, Spanish and Portuguese</p>';
    }
    

    document.getElementById('content_show1').innerHTML = content_show_1;
    document.getElementById('content_show2').innerHTML = content_show_2;
    document.getElementById('image_content_data').innerHTML = image_content_data_;
    document.getElementById('btn_info_data').innerHTML = btn_info_data_;
    //get picture content
    const main_pic_content = document.getElementById('main_pic');
    main_pic_content.src = main_pic;
    //get text content
    const label_text = document.getElementById('label_text');
    const label_kanagen = document.getElementById('label_kanagen');

    label_text.innerHTML = label_text_;
    label_kanagen.textContent = label_kanagen_;

    const content_text_label = document.getElementById('content_text_label');
    content_text_label.textContent = content_text_label_;

    const content_text_label_2 = document.getElementById('content_text_label_2');
    content_text_label_2.innerHTML = content_text_label_2_;
}

//picture change
const selected_image = document.getElementById('selected_image');
let selected_id = 'siteImage_1'
function changeImage(data){
    selected_image.src = data.children[0].getAttribute('src');
    data.classList.add('selected-image');
    document.getElementById(selected_id).classList.remove('selected-image')
    selected_id = data.getAttribute('id');
}

function displayModal(category){
    const enagic_img = document.getElementById('enagic_img');
    const enagic_modal_img = document.getElementById('enagic_modal_img');
    const powers_text = document.getElementById('powers_text');
    if(category=='btn_info_1'){
        enagic_img.src = enagic_img_1;
        enagic_modal_img.src = enagic_modal_img_1;
        powers_text.innerHTML = powers_text_1;
    }else if(category=='btn_info_2'){
        enagic_img.src = enagic_img_2;
        enagic_modal_img.src = enagic_modal_img_2;
        powers_text.innerHTML = powers_text_2;
    }else if(category=='btn_info_3'){
        enagic_img.src = enagic_img_3;
        enagic_modal_img.src = enagic_modal_img_3;
        powers_text.innerHTML = powers_text_3;
    }else if(category=='btn_info_4'){
        enagic_img.src = enagic_img_4;
        enagic_modal_img.src = enagic_modal_img_4;
        powers_text.innerHTML = powers_text_4;
    }

}
//dropdown click
const btn_content_show1 = document.getElementById("btn_content_show1");
const content_show1 = document.getElementById("content_show1");
let show_content = true;
const btn_content_show2 = document.getElementById("btn_content_show2");
const content_show2 = document.getElementById("content_show2");
let show_content_ = true;
//first dropdown
btn_content_show1.addEventListener('click', ()=>{
    if(show_content){
        content_show1.style.height = '60vh';
        show_content = false;
        btn_content_show1.classList.remove('fa-chevron-down');
        btn_content_show1.classList.add('fa-chevron-up');

        content_show2.style.height = '0';
        show_content_ = true;
        btn_content_show2.classList.remove('fa-chevron-up');
        btn_content_show2.classList.add('fa-chevron-down');
    }else{
        content_show1.style.height = '0';
        show_content = true;
        btn_content_show1.classList.remove('fa-chevron-up');
        btn_content_show1.classList.add('fa-chevron-down');

    }
});
//second dropdown

btn_content_show2.addEventListener('click', ()=>{
    if(show_content_){
        content_show2.style.height = '72vh';
        show_content_ = false;
        btn_content_show2.classList.remove('fa-chevron-down');
        btn_content_show2.classList.add('fa-chevron-up');

        content_show1.style.height = '0';
        show_content = true;
        btn_content_show1.classList.remove('fa-chevron-up');
        btn_content_show1.classList.add('fa-chevron-down');
    }else{
        show_content_ = true;
        content_show2.style.height = '0';
        btn_content_show2.classList.remove('fa-chevron-up');
        btn_content_show2.classList.add('fa-chevron-down');
    }
})
