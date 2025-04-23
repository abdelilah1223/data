function _0xeb38(_0x441366,_0x16e095){const _0x48ca6b=_0x48ca();return _0xeb38=function(_0xeb38cb,_0x3b2129){_0xeb38cb=_0xeb38cb-0x11b;let _0x1b43aa=_0x48ca6b[_0xeb38cb];return _0x1b43aa;},_0xeb38(_0x441366,_0x16e095);}(function(_0x13794c,_0x57da55){const _0x2741b7=_0xeb38,_0x42de49=_0x13794c();while(!![]){try{const _0xec44a9=parseInt(_0x2741b7(0x11c))/0x1*(parseInt(_0x2741b7(0x124))/0x2)+-parseInt(_0x2741b7(0x11f))/0x3+-parseInt(_0x2741b7(0x11d))/0x4+-parseInt(_0x2741b7(0x122))/0x5+-parseInt(_0x2741b7(0x121))/0x6+parseInt(_0x2741b7(0x11e))/0x7+parseInt(_0x2741b7(0x120))/0x8;if(_0xec44a9===_0x57da55)break;else _0x42de49['push'](_0x42de49['shift']());}catch(_0xcf77f0){_0x42de49['push'](_0x42de49['shift']());}}}(_0x48ca,0x32ca0));function _0x48ca(){const _0x43d907=['getFullYear','412171GVGgjq','536672zhUzlF','322665AePCIi','335922rhRgzA','3786744WFSDuE','2222112pJchPO','535415lPGEQW','date','2uZSQAp'];_0x48ca=function(){return _0x43d907;};return _0x48ca();}function getdate(){const _0x516e68=_0xeb38,_0x14a819=new Date(),_0x28cf99=_0x14a819[_0x516e68(0x11b)]();document['getElementById'](_0x516e68(0x123))['innerText']=_0x28cf99;}getdate();
const trips = [
    {
      destination: "توقف مستر ",
      duration: "0 يوم ",
      price: "2600 درهم",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Carol_Burnett_1958.JPG/500px-Carol_Burnett_1958.JPG",
      image2: "https://www.codingdojo.com/blog/wp-content/uploads/9-Types-of-Developers-Which-One-Will-You-Be-01.jpg.webp",
      image3: "https://img.freepik.com/vecteurs-libre/boite-cadeau-surprise-surprise_3446-340.jpg?t=st=1745442496~exp=1745446096~hmac=31b5d8d3b4229156a0011046d40734b94a37d76f9eb3160cabb94d0548a6e435&w=900",
      image4: "https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/good-software-developer-1128x635.jpg",
      whatsapp: "666757273",
      instagram: "#",
      facebook: "#",
      description: `مرحبا بكم اضغط على الزر في الاسفل لرؤية التفاصيل                
      
      
      
      
      
      
      
      
        مرحبا بكم انا مطور الموقع وقد انتهت الفترة المجانية وايضا انتهت فترة التدريب وقد كان لدينا شك ان المدرب كان غرضه هو بيع الموقع لاحدى شركات السياحة وهو ما لن ارضى به ولن اقوم بتوفير مجهودي ليستعمله اشخاص اخرين مجانا ل    لذا اذا كان هناك من هو بحاجة للموقع ليتواصل معي على الخاص وليدفع ثمن الموقع وبعدها يصبح الموقع ملكك ويمكنك استعمال الموقع كما تشاء `
    }
  ];

    function renderTripCards(filteredTrips = trips) {
        document.getElementById("o1").style.display = "none";
        document.getElementById("o2").style.display = "none";
        document.getElementById("o3").style.display = "none";
        document.getElementById("n").textContent = "abdelilah elbaroudi"
        document.getElementById("ab").textContent = "نحن فريق التطوير الذي قام بتطوير هذا الموقع ";
        document.getElementById("see").textContent = "لدي رؤية واحدة لا يوجد عمل مجاني بالنسبة لي ";
        document.getElementById("our").textContent ="ارضاء العملاء مع ارضاء النفس "
      document.getElementById("logo").src = "https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/good-software-developer-1128x635.jpg";
      const emails = document.querySelectorAll('.email');
      emails.forEach((item) => {
        if (item.tagName.toLowerCase() == "span") {
          item.textContent = `albaroudiabdelilah92@gmail.com`;
        } else {
          item.href = "mailto:albaroudiabdelilah92@gmail.com";
        }
      });
      
      const whatsapp = document.querySelectorAll('.number');
      whatsapp.forEach((item) => {
        if (item.tagName.toLowerCase() == "a") {
          item.href = "https://wa.me/+212766981152";
        } else {
          item.textContent = "0766981152";
        }
      });
      
      const instagram = document.querySelectorAll('.inst');
      instagram.forEach((item) => {
        if (item.tagName.toLowerCase() == "a") {
          item.href = "https://www.instagram.com/abdohigh?igsh=MWVsY2xnYTlibzZjNg==";
        } else {
          item.textContent = "https://www.instagram.com/abdohigh?igsh=MWVsY2xnYTlibzZjNg==";
        }
      });
      
      const facebook = document.querySelectorAll('.fs');
      facebook.forEach((item) => {
        if (item.tagName.toLowerCase() == "a") {
          item.href = "https://www.facebook.com/profile.php?id=100070617385397";
        } else {
          item.textContent = "https://www.facebook.com/profile.php?id=100070617385397";
        }
      });
      document.getElementById("location").textContent="المغرب - الحسيمة  "
      document.getElementById("contactForm").action="mailto:albaroudiabdelilah92@gmail.com"
  
      const container = document.getElementById('tripCardsContainer');
      container.innerHTML = '';
      filteredTrips.forEach(trip => {
        const card = `
          <div class="col-md-3 col-12 mb-12">
            <div class="card">
              <img src="${trip.image}" width='200px' height="200px" class="card-img-top" alt="${trip.destination}">
              <div class="card-body">
                <h5 class="card-title">${trip.destination}</h5>
                <p class="card-text">${trip.description.substring(0, 100)}...</p>
                   <div class="d-flex justify-content-between align-items-center">
                    <span class="badge bg-primary">${trip.duration}</span>
                    <span class="badge bg-success">${trip.price}</span>
                    </div>
                   <div class="card-footer">
                <button class="btn btn-primary" w-100 data-bs-toggle="modal" data-bs-target="#tripModal" onclick="showTripDetails('${trip.destination}', '${trip.duration}', '${trip.price}', '${trip.whatsapp}', '${trip.instagram}', '${trip.facebook}')">
                <i class="fas fa-info-circle me-2"></i> تفاصيل أكثر
                </button>
           </div>
                </div>
            </div>
          </div>
        `;


        container.innerHTML += card;
      });
    }
    function showTripDetails(destination, duration, price, whatsapp, instagram, facebook) {
      const selectedTrip = trips.find(trip => trip.destination === destination);
      document.getElementById('tripImage').src = selectedTrip.image;
        document.getElementById('tripImage2').src = selectedTrip.image2;
        document.getElementById('tripImage3').src = selectedTrip.image3;
        document.getElementById('tripImage4').src = selectedTrip.image4;
      document.getElementById('tripDestination').innerText = destination;
      document.getElementById('tripDuration').innerHTML = duration;
      document.getElementById('tripPrice').innerHTML = price;
      document.getElementById('tripDetails').innerHTML = `<p> ${selectedTrip.description}</p>`;
      const message = `مرحبا، أود الاستفسار عن   ${destination}`;
      document.getElementById('whatsappLink').href = `https://wa.me/+212${whatsapp}?text=${encodeURIComponent(message)}`;
      document.getElementById('instagramLink').href = "https://www.instagram.com/abdohigh?igsh=MWVsY2xnYTlibzZjNg==";
      document.getElementById('facebookLink').href = "https://www.facebook.com/profile.php?id=100070617385397";
    }

    // Search Trips
    function searchTrips() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const filteredTrips = trips.filter(trip => trip.destination.toLowerCase().includes(query));
      renderTripCards(filteredTrips);
    }

    // Toggle Dark Mode
    const toggleMode = document.getElementById('toggleMode');
    toggleMode.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
    renderTripCards();