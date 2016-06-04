angular.module('DiseaseRegistry.services', [])
    .factory('cohortFactory', function ($http) {

        //var url = "http://diseaseregistry-61406.onmodulus.net/api/";

        var url= "http://127.0.0.1:3000/api/";
        var cities = [{"city": "Mumbai", "checked": false},
            {"city": "Delhi", "checked": false},
            {"city": "Bengaluru", "checked": false},
            {"city": "Ahmedabad", "checked": false},
            {"city": "Hyderabad", "checked": false},
            {"city": "Chennai", "checked": false},
            {"city": "Kolkata", "checked": false},
            {"city": "Pune", "checked": false},
            {"city": "Jaipur", "checked": false},
            {"city": "Surat", "checked": false},
            {"city": "Lucknow", "checked": false},
            {"city": "Kanpur", "checked": false},
            {"city": "Nagpur", "checked": false},
            {"city": "Patna", "checked": false},
            {"city": "Indore", "checked": false},
            {"city": "Thane", "checked": false},
            {"city": "Bhopal", "checked": false},
            {"city": "Visakhapatnam", "checked": false},
            {"city": "Vadodara", "checked": false},
            {"city": "Firozabad", "checked": false},
            {"city": "Ludhiana", "checked": false},
            {"city": "Rajkot", "checked": false},
            {"city": "Agra", "checked": false},
            {"city": "Siliguri", "checked": false},
            {"city": "Nashik", "checked": false},
            {"city": "Faridabad", "checked": false},
            {"city": "Patiala", "checked": false},
            {"city": "Meerut", "checked": false},
            {"city": "Kalyan-Dombivali", "checked": false},
            {"city": "Vasai-Virar", "checked": false},
            {"city": "Varanasi", "checked": false},
            {"city": "Srinagar", "checked": false},
            {"city": "Dhanbad", "checked": false},
            {"city": "Jodhpur", "checked": false},
            {"city": "Amritsar", "checked": false},
            {"city": "Raipur", "checked": false},
            {"city": "Allahabad", "checked": false},
            {"city": "Coimbatore", "checked": false},
            {"city": "Jabalpur", "checked": false},
            {"city": "Gwalior", "checked": false},
            {"city": "Vijayawada", "checked": false},
            {"city": "Madurai", "checked": false},
            {"city": "Guwahati", "checked": false},
            {"city": "Chandigarh", "checked": false},
            {"city": "Hubli-Dharwad", "checked": false},
            {"city": "Amroha", "checked": false},
            {"city": "Moradabad", "checked": false},
            {"city": "Gurgaon", "checked": false},
            {"city": "Aligarh", "checked": false},
            {"city": "Solapur", "checked": false},
            {"city": "Ranchi", "checked": false},
            {"city": "Jalandhar", "checked": false},
            {"city": "Tiruchirappalli", "checked": false},
            {"city": "Bhubaneswar", "checked": false},
            {"city": "Salem", "checked": false},
            {"city": "Warangal", "checked": false},
            {"city": "Mira-Bhayandar", "checked": false},
            {"city": "Thiruvananthapuram", "checked": false},
            {"city": "Bhiwandi", "checked": false},
            {"city": "Saharanpur", "checked": false},
            {"city": "Guntur", "checked": false},
            {"city": "Amravati", "checked": false},
            {"city": "Bikaner", "checked": false},
            {"city": "Noida", "checked": false},
            {"city": "Jamshedpur", "checked": false},
            {"city": "Bhilai Nagar", "checked": false},
            {"city": "Cuttack", "checked": false},
            {"city": "Kochi", "checked": false},
            {"city": "Udaipur", "checked": false},
            {"city": "Bhavnagar", "checked": false},
            {"city": "Dehradun", "checked": false},
            {"city": "Asansol", "checked": false},
            {"city": "Nanded-Waghala", "checked": false},
            {"city": "Ajmer", "checked": false},
            {"city": "Jamnagar", "checked": false},
            {"city": "Ujjain", "checked": false},
            {"city": "Sangli", "checked": false},
            {"city": "Loni", "checked": false},
            {"city": "Jhansi", "checked": false},
            {"city": "Pondicherry", "checked": false},
            {"city": "Nellore", "checked": false},
            {"city": "Jammu", "checked": false},
            {"city": "Belagavi", "checked": false},
            {"city": "Raurkela", "checked": false},
            {"city": "Mangaluru", "checked": false},
            {"city": "Tirunelveli", "checked": false},
            {"city": "Malegaon", "checked": false},
            {"city": "Gaya", "checked": false},
            {"city": "Tiruppur", "checked": false},
            {"city": "Davanagere", "checked": false},
            {"city": "Kozhikode", "checked": false},
            {"city": "Akola", "checked": false},
            {"city": "Kurnool", "checked": false},
            {"city": "Bokaro Steel City", "checked": false},
            {"city": "Rajahmundry", "checked": false},
            {"city": "Ballari", "checked": false},
            {"city": "Agartala", "checked": false},
            {"city": "Bhagalpur", "checked": false},
            {"city": "Latur", "checked": false},
            {"city": "Dhule", "checked": false},
            {"city": "Korba", "checked": false},
            {"city": "Bhilwara", "checked": false},
            {"city": "Brahmapur", "checked": false},
            {"city": "Mysore", "checked": false},
            {"city": "Muzaffarpur", "checked": false},
            {"city": "Ahmednagar", "checked": false},
            {"city": "Kollam", "checked": false},
            {"city": "Raghunathganj", "checked": false},
            {"city": "Bilaspur", "checked": false},
            {"city": "Shahjahanpur", "checked": false},
            {"city": "Thrissur", "checked": false},
            {"city": "Alwar", "checked": false},
            {"city": "Kakinada", "checked": false},
            {"city": "Nizamabad", "checked": false},
            {"city": "Sagar", "checked": false},
            {"city": "Tumkur", "checked": false},
            {"city": "Hisar", "checked": false},
            {"city": "Rohtak", "checked": false},
            {"city": "Panipat", "checked": false},
            {"city": "Darbhanga", "checked": false},
            {"city": "Kharagpur", "checked": false},
            {"city": "Aizawl", "checked": false},
            {"city": "Ichalkaranji", "checked": false},
            {"city": "Tirupati", "checked": false},
            {"city": "Karnal", "checked": false},
            {"city": "Bathinda", "checked": false},
            {"city": "Rampur", "checked": false},
            {"city": "Shivamogga", "checked": false},
            {"city": "Ratlam", "checked": false},
            {"city": "Modinagar", "checked": false},
            {"city": "Durg", "checked": false},
            {"city": "Shillong", "checked": false},
            {"city": "Imphal", "checked": false},
            {"city": "Hapur", "checked": false},
            {"city": "Ranipet", "checked": false},
            {"city": "Anantapur", "checked": false},
            {"city": "Arrah", "checked": false},
            {"city": "Karimnagar", "checked": false},
            {"city": "Parbhani", "checked": false},
            {"city": "Etawah", "checked": false},
            {"city": "Bharatpur", "checked": false},
            {"city": "Begusarai", "checked": false},
            {"city": "New Delhi", "checked": false},
            {"city": "Chhapra", "checked": false},
            {"city": "Kadapa", "checked": false},
            {"city": "Ramagundam", "checked": false},
            {"city": "Pali", "checked": false},
            {"city": "Satna", "checked": false},
            {"city": "Vizianagaram", "checked": false},
            {"city": "Katihar", "checked": false},
            {"city": "Hardwar", "checked": false},
            {"city": "Sonipat", "checked": false},
            {"city": "Nagercoil", "checked": false},
            {"city": "Thanjavur", "checked": false},
            {"city": "Murwara (Katni)", "checked": false},
            {"city": "Naihati", "checked": false},
            {"city": "Sambhal", "checked": false},
            {"city": "Nadiad", "checked": false},
            {"city": "Yamunanagar", "checked": false},
            {"city": "English Bazar", "checked": false},
            {"city": "Eluru", "checked": false},
            {"city": "Munger", "checked": false},
            {"city": "Panchkula", "checked": false},
            {"city": "Raayachuru", "checked": false},
            {"city": "Panvel", "checked": false},
            {"city": "Deoghar", "checked": false},
            {"city": "Ongole", "checked": false},
            {"city": "Nandyal", "checked": false},
            {"city": "Morena", "checked": false},
            {"city": "Bhiwani", "checked": false},
            {"city": "Porbandar", "checked": false},
            {"city": "Palakkad", "checked": false},
            {"city": "Anand", "checked": false},
            {"city": "Purnia", "checked": false},
            {"city": "Baharampur", "checked": false},
            {"city": "Barmer", "checked": false},
            {"city": "Morvi", "checked": false},
            {"city": "Orai", "checked": false},
            {"city": "Bahraich", "checked": false},
            {"city": "Sikar", "checked": false},
            {"city": "Vellore", "checked": false},
            {"city": "Singrauli", "checked": false},
            {"city": "Khammam", "checked": false},
            {"city": "Mahesana", "checked": false},
            {"city": "Silchar", "checked": false},
            {"city": "Sambalpur", "checked": false},
            {"city": "Rewa", "checked": false},
            {"city": "Unnao", "checked": false},
            {"city": "Hugli-Chinsurah", "checked": false},
            {"city": "Raiganj", "checked": false},
            {"city": "Phusro", "checked": false},
            {"city": "Adityapur", "checked": false},
            {"city": "Alappuzha", "checked": false},
            {"city": "Bahadurgarh", "checked": false},
            {"city": "Machilipatnam", "checked": false},
            {"city": "Rae Bareli", "checked": false},
            {"city": "Jalpaiguri", "checked": false},
            {"city": "Bharuch", "checked": false},
            {"city": "Pathankot", "checked": false},
            {"city": "Hoshiarpur", "checked": false},
            {"city": "Baramula", "checked": false},
            {"city": "Adoni", "checked": false},
            {"city": "Jind", "checked": false},
            {"city": "Tonk", "checked": false},
            {"city": "Tenali", "checked": false},
            {"city": "Kancheepuram", "checked": false},
            {"city": "Vapi", "checked": false},
            {"city": "Sirsa", "checked": false},
            {"city": "Navsari", "checked": false},
            {"city": "Mahbubnagar", "checked": false},
            {"city": "Puri", "checked": false},
            {"city": "Robertson Pet", "checked": false},
            {"city": "Erode", "checked": false},
            {"city": "Batala", "checked": false},
            {"city": "Haldwani-cum-Kathgodam", "checked": false},
            {"city": "Vidisha", "checked": false},
            {"city": "Saharsa", "checked": false},
            {"city": "Thanesar", "checked": false},
            {"city": "Chittoor", "checked": false},
            {"city": "Veraval", "checked": false},
            {"city": "Lakhimpur", "checked": false},
            {"city": "Sitapur", "checked": false},
            {"city": "Hindupur", "checked": false},
            {"city": "Santipur", "checked": false},
            {"city": "Balurghat", "checked": false},
            {"city": "Ganjbasoda", "checked": false},
            {"city": "Moga", "checked": false},
            {"city": "Proddatur", "checked": false},
            {"city": "Srinagar", "checked": false},
            {"city": "Medinipur", "checked": false},
            {"city": "Habra", "checked": false},
            {"city": "Sasaram", "checked": false},
            {"city": "Hajipur", "checked": false},
            {"city": "Bhuj", "checked": false},
            {"city": "Shivpuri", "checked": false},
            {"city": "Ranaghat", "checked": false},
            {"city": "Shimla", "checked": false},
            {"city": "Tiruvannamalai", "checked": false},
            {"city": "Kaithal", "checked": false},
            {"city": "Rajnandgaon", "checked": false},
            {"city": "Godhra", "checked": false},
            {"city": "Hazaribag", "checked": false},
            {"city": "Bhimavaram", "checked": false},
            {"city": "Mandsaur", "checked": false},
            {"city": "Dibrugarh", "checked": false},
            {"city": "Kolar", "checked": false},
            {"city": "Bankura", "checked": false},
            {"city": "Mandya", "checked": false},
            {"city": "Dehri-on-Sone", "checked": false},
            {"city": "Madanapalle", "checked": false},
            {"city": "Malerkotla", "checked": false},
            {"city": "Lalitpur", "checked": false},
            {"city": "Bettiah", "checked": false},
            {"city": "Pollachi", "checked": false},
            {"city": "Khanna", "checked": false},
            {"city": "Neemuch", "checked": false},
            {"city": "Palwal", "checked": false},
            {"city": "Palanpur", "checked": false},
            {"city": "Guntakal", "checked": false},
            {"city": "Nabadwip", "checked": false},
            {"city": "Udupi", "checked": false},
            {"city": "Jagdalpur", "checked": false},
            {"city": "Motihari", "checked": false},
            {"city": "Pilibhit", "checked": false},
            {"city": "Dimapur", "checked": false},
            {"city": "Mohali", "checked": false},
            {"city": "Sadulpur", "checked": false},
            {"city": "Rajapalayam", "checked": false},
            {"city": "Dharmavaram", "checked": false},
            {"city": "Kashipur", "checked": false},
            {"city": "Sivakasi", "checked": false},
            {"city": "Darjiling", "checked": false},
            {"city": "Chikkamagaluru", "checked": false},
            {"city": "Gudivada", "checked": false},
            {"city": "Baleshwar Town", "checked": false},
            {"city": "Mancherial", "checked": false},
            {"city": "Srikakulam", "checked": false},
            {"city": "Adilabad", "checked": false},
            {"city": "Yavatmal", "checked": false},
            {"city": "Barnala", "checked": false},
            {"city": "Nagaon", "checked": false},
            {"city": "Narasaraopet", "checked": false},
            {"city": "Raigarh", "checked": false},
            {"city": "Roorkee", "checked": false},
            {"city": "Valsad", "checked": false},
            {"city": "Ambikapur", "checked": false},
            {"city": "Giridih", "checked": false},
            {"city": "Chandausi", "checked": false},
            {"city": "Purulia", "checked": false},
            {"city": "Patan", "checked": false},
            {"city": "Bagaha", "checked": false},
            {"city": "Hardoi ", "checked": false},
            {"city": "Achalpur", "checked": false},
            {"city": "Osmanabad", "checked": false},
            {"city": "Deesa", "checked": false},
            {"city": "Nandurbar", "checked": false},
            {"city": "Azamgarh", "checked": false},
            {"city": "Ramgarh", "checked": false},
            {"city": "Firozpur", "checked": false},
            {"city": "Baripada Town", "checked": false},
            {"city": "Karwar", "checked": false},
            {"city": "Siwan", "checked": false},
            {"city": "Rajampet", "checked": false},
            {"city": "Pudukkottai", "checked": false},
            {"city": "Anantnag", "checked": false},
            {"city": "Tadpatri", "checked": false},
            {"city": "Satara", "checked": false},
            {"city": "Bhadrak", "checked": false},
            {"city": "Kishanganj", "checked": false},
            {"city": "Suryapet", "checked": false},
            {"city": "Wardha", "checked": false},
            {"city": "Ranebennuru", "checked": false},
            {"city": "Amreli", "checked": false},
            {"city": "Neyveli (TS)", "checked": false},
            {"city": "Jamalpur", "checked": false},
            {"city": "Marmagao", "checked": false},
            {"city": "Udgir", "checked": false},
            {"city": "Tadepalligudem", "checked": false},
            {"city": "Nagapattinam", "checked": false},
            {"city": "Buxar", "checked": false},
            {"city": "Aurangabad", "checked": false},
            {"city": "Jehanabad", "checked": false},
            {"city": "Phagwara", "checked": false},
            {"city": "Khair", "checked": false},
            {"city": "Sawai Madhopur", "checked": false},
            {"city": "Kapurthala", "checked": false},
            {"city": "Chilakaluripet", "checked": false},
            {"city": "Aurangabad", "checked": false},
            {"city": "Malappuram", "checked": false},
            {"city": "Rewari", "checked": false},
            {"city": "Nagaur", "checked": false},
            {"city": "Sultanpur", "checked": false},
            {"city": "Nagda", "checked": false},
            {"city": "Port Blair", "checked": false},
            {"city": "Lakhisarai", "checked": false},
            {"city": "Panaji", "checked": false},
            {"city": "Tinsukia", "checked": false},
            {"city": "Itarsi", "checked": false},
            {"city": "Kohima", "checked": false},
            {"city": "Balangir", "checked": false},
            {"city": "Nawada", "checked": false},
            {"city": "Jharsuguda", "checked": false},
            {"city": "Jagtial", "checked": false},
            {"city": "Viluppuram", "checked": false},
            {"city": "Amalner", "checked": false},
            {"city": "Zirakpur", "checked": false},
            {"city": "Tanda", "checked": false},
            {"city": "Tiruchengode", "checked": false},
            {"city": "Nagina", "checked": false},
            {"city": "Yemmiganur", "checked": false},
            {"city": "Vaniyambadi", "checked": false},
            {"city": "Sarni", "checked": false},
            {"city": "Theni Allinagaram", "checked": false},
            {"city": "Margao", "checked": false},
            {"city": "Akot", "checked": false},
            {"city": "Sehore", "checked": false},
            {"city": "Mhow Cantonment", "checked": false},
            {"city": "Kot Kapura", "checked": false},
            {"city": "Makrana", "checked": false},
            {"city": "Pandharpur", "checked": false},
            {"city": "Miryalaguda", "checked": false},
            {"city": "Shamli", "checked": false},
            {"city": "Seoni", "checked": false},
            {"city": "Ranibennur", "checked": false},
            {"city": "Kadiri", "checked": false},
            {"city": "Shrirampur", "checked": false},
            {"city": "Rudrapur", "checked": false},
            {"city": "Parli", "checked": false},
            {"city": "Najibabad", "checked": false},
            {"city": "Nirmal", "checked": false},
            {"city": "Udhagamandalam", "checked": false},
            {"city": "Shikohabad", "checked": false},
            {"city": "Jhumri Tilaiya", "checked": false},
            {"city": "Aruppukkottai", "checked": false},
            {"city": "Ponnani", "checked": false},
            {"city": "Jamui", "checked": false},
            {"city": "Sitamarhi", "checked": false},
            {"city": "Chirala", "checked": false},
            {"city": "Anjar", "checked": false},
            {"city": "Karaikal", "checked": false},
            {"city": "Hansi", "checked": false},
            {"city": "Anakapalle", "checked": false},
            {"city": "Mahasamund", "checked": false},
            {"city": "Faridkot", "checked": false},
            {"city": "Saunda", "checked": false},
            {"city": "Dhoraji", "checked": false},
            {"city": "Paramakudi", "checked": false},
            {"city": "Balaghat", "checked": false},
            {"city": "Sujangarh", "checked": false},
            {"city": "Khambhat", "checked": false},
            {"city": "Muktsar", "checked": false},
            {"city": "Rajpura", "checked": false},
            {"city": "Kavali", "checked": false},
            {"city": "Dhamtari", "checked": false},
            {"city": "Ashok Nagar", "checked": false},
            {"city": "Sardarshahar", "checked": false},
            {"city": "Mahuva", "checked": false},
            {"city": "Bargarh", "checked": false},
            {"city": "Kamareddy", "checked": false},
            {"city": "Sahibganj", "checked": false},
            {"city": "Kothagudem", "checked": false},
            {"city": "Ramanagaram", "checked": false},
            {"city": "Gokak", "checked": false},
            {"city": "Tikamgarh", "checked": false},
            {"city": "Araria", "checked": false},
            {"city": "Rishikesh", "checked": false},
            {"city": "Shahdol", "checked": false},
            {"city": "Medininagar (Daltonganj)", "checked": false},
            {"city": "Arakkonam", "checked": false},
            {"city": "Washim", "checked": false},
            {"city": "Sangrur", "checked": false},
            {"city": "Bodhan", "checked": false},
            {"city": "Fazilka", "checked": false},
            {"city": "Palacole", "checked": false},
            {"city": "Keshod", "checked": false},
            {"city": "Sullurpeta", "checked": false},
            {"city": "Wadhwan", "checked": false},
            {"city": "Gurdaspur", "checked": false},
            {"city": "Vatakara", "checked": false},
            {"city": "Tura", "checked": false},
            {"city": "Narnaul", "checked": false},
            {"city": "Kharar", "checked": false},
            {"city": "Yadgir", "checked": false},
            {"city": "Ambejogai", "checked": false},
            {"city": "Ankleshwar", "checked": false},
            {"city": "Savarkundla", "checked": false},
            {"city": "Paradip", "checked": false},
            {"city": "Virudhachalam", "checked": false},
            {"city": "Kanhangad", "checked": false},
            {"city": "Kadi", "checked": false},
            {"city": "Srivilliputhur", "checked": false},
            {"city": "Gobindgarh", "checked": false},
            {"city": "Tindivanam", "checked": false},
            {"city": "Mansa", "checked": false},
            {"city": "Taliparamba", "checked": false},
            {"city": "Manmad", "checked": false},
            {"city": "Tanuku", "checked": false},
            {"city": "Rayachoti", "checked": false},
            {"city": "Virudhunagar", "checked": false},
            {"city": "Koyilandy", "checked": false},
            {"city": "Jorhat", "checked": false},
            {"city": "Karur", "checked": false},
            {"city": "Valparai", "checked": false},
            {"city": "Srikalahasti", "checked": false},
            {"city": "Neyyattinkara", "checked": false},
            {"city": "Bapatla", "checked": false},
            {"city": "Fatehabad", "checked": false},
            {"city": "Malout", "checked": false},
            {"city": "Sankarankovil", "checked": false},
            {"city": "Tenkasi", "checked": false},
            {"city": "Ratnagiri", "checked": false},
            {"city": "Rabkavi Banhatti", "checked": false},
            {"city": "Sikandrabad", "checked": false},
            {"city": "Chaibasa", "checked": false},
            {"city": "Chirmiri", "checked": false},
            {"city": "Palwancha", "checked": false},
            {"city": "Bhawanipatna", "checked": false},
            {"city": "Kayamkulam", "checked": false},
            {"city": "Pithampur", "checked": false},
            {"city": "Nabha", "checked": false},
            {"city": "Shahabad, Hardoi", "checked": false},
            {"city": "Dhenkanal", "checked": false},
            {"city": "Uran Islampur", "checked": false},
            {"city": "Gopalganj", "checked": false},
            {"city": "Bongaigaon City", "checked": false},
            {"city": "Palani", "checked": false},
            {"city": "Pusad", "checked": false},
            {"city": "Sopore", "checked": false},
            {"city": "Pilkhuwa", "checked": false},
            {"city": "Tarn Taran", "checked": false},
            {"city": "Renukoot", "checked": false},
            {"city": "Mandamarri", "checked": false},
            {"city": "Shahabad", "checked": false},
            {"city": "Barbil", "checked": false},
            {"city": "Koratla", "checked": false},
            {"city": "Madhubani", "checked": false},
            {"city": "Arambagh", "checked": false},
            {"city": "Gohana", "checked": false},
            {"city": "Ladnu", "checked": false},
            {"city": "Pattukkottai", "checked": false},
            {"city": "Sirsi", "checked": false},
            {"city": "Sircilla", "checked": false},
            {"city": "Tamluk", "checked": false},
            {"city": "Jagraon", "checked": false},
            {"city": "AlipurdUrban Agglomerationr", "checked": false},
            {"city": "Alirajpur", "checked": false},
            {"city": "Tandur", "checked": false},
            {"city": "Naidupet", "checked": false},
            {"city": "Tirupathur", "checked": false},
            {"city": "Tohana", "checked": false},
            {"city": "Ratangarh", "checked": false},
            {"city": "Dhubri", "checked": false},
            {"city": "Masaurhi", "checked": false},
            {"city": "Visnagar", "checked": false},
            {"city": "Vrindavan", "checked": false},
            {"city": "Nokha", "checked": false},
            {"city": "Nagari", "checked": false},
            {"city": "Narwana", "checked": false},
            {"city": "Ramanathapuram", "checked": false},
            {"city": "Ujhani", "checked": false},
            {"city": "Samastipur", "checked": false},
            {"city": "Laharpur", "checked": false},
            {"city": "Sangamner", "checked": false},
            {"city": "Nimbahera", "checked": false},
            {"city": "Siddipet", "checked": false},
            {"city": "Suri", "checked": false},
            {"city": "Diphu", "checked": false},
            {"city": "Jhargram", "checked": false},
            {"city": "Shirpur-Warwade", "checked": false},
            {"city": "Tilhar", "checked": false},
            {"city": "Sindhnur", "checked": false},
            {"city": "Udumalaipettai", "checked": false},
            {"city": "Malkapur", "checked": false},
            {"city": "Wanaparthy", "checked": false},
            {"city": "Gudur", "checked": false},
            {"city": "Kendujhar", "checked": false},
            {"city": "Mandla", "checked": false},
            {"city": "Mandi", "checked": false},
            {"city": "Nedumangad", "checked": false},
            {"city": "North Lakhimpur", "checked": false},
            {"city": "Vinukonda", "checked": false},
            {"city": "Tiptur", "checked": false},
            {"city": "Gobichettipalayam", "checked": false},
            {"city": "Sunabeda", "checked": false},
            {"city": "Wani", "checked": false},
            {"city": "Upleta", "checked": false},
            {"city": "Narasapuram", "checked": false},
            {"city": "Nuzvid", "checked": false},
            {"city": "Tezpur", "checked": false},
            {"city": "Una", "checked": false},
            {"city": "Markapur", "checked": false},
            {"city": "Sheopur", "checked": false},
            {"city": "Thiruvarur", "checked": false},
            {"city": "Sidhpur", "checked": false},
            {"city": "Sahaswan", "checked": false},
            {"city": "Suratgarh", "checked": false},
            {"city": "Shajapur", "checked": false},
            {"city": "Rayagada", "checked": false},
            {"city": "Lonavla", "checked": false},
            {"city": "Ponnur", "checked": false},
            {"city": "Kagaznagar", "checked": false},
            {"city": "Gadwal", "checked": false},
            {"city": "Bhatapara", "checked": false},
            {"city": "Kandukur", "checked": false},
            {"city": "Sangareddy", "checked": false},
            {"city": "Unjha", "checked": false},
            {"city": "Lunglei", "checked": false},
            {"city": "Karimganj", "checked": false},
            {"city": "Kannur", "checked": false},
            {"city": "Bobbili", "checked": false},
            {"city": "Mokameh", "checked": false},
            {"city": "Talegaon Dabhade", "checked": false},
            {"city": "Anjangaon", "checked": false},
            {"city": "Mangrol", "checked": false},
            {"city": "Sunam", "checked": false},
            {"city": "Gangarampur", "checked": false},
            {"city": "Thiruvallur", "checked": false},
            {"city": "Tirur", "checked": false},
            {"city": "Rath", "checked": false},
            {"city": "Jatani", "checked": false},
            {"city": "Viramgam", "checked": false},
            {"city": "Rajsamand", "checked": false},
            {"city": "Yanam", "checked": false},
            {"city": "Kottayam", "checked": false},
            {"city": "Panruti", "checked": false},
            {"city": "Dhuri", "checked": false},
            {"city": "Namakkal", "checked": false},
            {"city": "Kasaragod", "checked": false},
            {"city": "Modasa", "checked": false},
            {"city": "Rayadurg", "checked": false},
            {"city": "Supaul", "checked": false},
            {"city": "Kunnamkulam", "checked": false},
            {"city": "Umred", "checked": false},
            {"city": "Bellampalle", "checked": false},
            {"city": "Sibsagar", "checked": false},
            {"city": "Mandi Dabwali", "checked": false},
            {"city": "Ottappalam", "checked": false},
            {"city": "Dumraon", "checked": false},
            {"city": "Samalkot", "checked": false},
            {"city": "Jaggaiahpet", "checked": false},
            {"city": "Goalpara", "checked": false},
            {"city": "Tuni", "checked": false},
            {"city": "Lachhmangarh", "checked": false},
            {"city": "Bhongir", "checked": false},
            {"city": "Amalapuram", "checked": false},
            {"city": "Firozpur Cantt.", "checked": false},
            {"city": "Vikarabad", "checked": false},
            {"city": "Thiruvalla", "checked": false},
            {"city": "Sherkot", "checked": false},
            {"city": "Palghar", "checked": false},
            {"city": "Shegaon", "checked": false},
            {"city": "Jangaon", "checked": false},
            {"city": "Bheemunipatnam", "checked": false},
            {"city": "Panna", "checked": false},
            {"city": "Thodupuzha", "checked": false},
            {"city": "KathUrban Agglomeration", "checked": false},
            {"city": "Palitana", "checked": false},
            {"city": "Arwal", "checked": false},
            {"city": "Venkatagiri", "checked": false},
            {"city": "Kalpi", "checked": false},
            {"city": "Rajgarh (Churu)", "checked": false},
            {"city": "Sattenapalle", "checked": false},
            {"city": "Arsikere", "checked": false},
            {"city": "Ozar", "checked": false},
            {"city": "Thirumangalam", "checked": false},
            {"city": "Petlad", "checked": false},
            {"city": "Nasirabad", "checked": false},
            {"city": "Phaltan", "checked": false},
            {"city": "Rampurhat", "checked": false},
            {"city": "Nanjangud", "checked": false},
            {"city": "Forbesganj", "checked": false},
            {"city": "Tundla", "checked": false},
            {"city": "BhabUrban Agglomeration", "checked": false},
            {"city": "Sagara", "checked": false},
            {"city": "Pithapuram", "checked": false},
            {"city": "Sira", "checked": false},
            {"city": "Bhadrachalam", "checked": false},
            {"city": "Charkhi Dadri", "checked": false},
            {"city": "Chatra", "checked": false},
            {"city": "Palasa Kasibugga", "checked": false},
            {"city": "Nohar", "checked": false},
            {"city": "Yevla", "checked": false},
            {"city": "Sirhind Fatehgarh Sahib", "checked": false},
            {"city": "Bhainsa", "checked": false},
            {"city": "Parvathipuram", "checked": false},
            {"city": "Shahade", "checked": false},
            {"city": "Chalakudy", "checked": false},
            {"city": "Narkatiaganj", "checked": false},
            {"city": "Kapadvanj", "checked": false},
            {"city": "Macherla", "checked": false},
            {"city": "Raghogarh-Vijaypur", "checked": false},
            {"city": "Rupnagar", "checked": false},
            {"city": "Naugachhia", "checked": false},
            {"city": "Sendhwa", "checked": false},
            {"city": "Byasanagar", "checked": false},
            {"city": "Sandila", "checked": false},
            {"city": "Gooty", "checked": false},
            {"city": "Salur", "checked": false},
            {"city": "Nanpara", "checked": false},
            {"city": "Sardhana", "checked": false},
            {"city": "Vita", "checked": false},
            {"city": "Gumia", "checked": false},
            {"city": "Puttur", "checked": false},
            {"city": "Jalandhar Cantt.", "checked": false},
            {"city": "Nehtaur", "checked": false},
            {"city": "Changanassery", "checked": false},
            {"city": "Mandapeta", "checked": false},
            {"city": "Dumka", "checked": false},
            {"city": "Seohara", "checked": false},
            {"city": "Umarkhed", "checked": false},
            {"city": "Madhupur", "checked": false},
            {"city": "Vikramasingapuram", "checked": false},
            {"city": "Punalur", "checked": false},
            {"city": "Kendrapara", "checked": false},
            {"city": "Sihor", "checked": false},
            {"city": "Nellikuppam", "checked": false},
            {"city": "Samana", "checked": false},
            {"city": "Warora", "checked": false},
            {"city": "Nilambur", "checked": false},
            {"city": "Rasipuram", "checked": false},
            {"city": "Ramnagar", "checked": false},
            {"city": "Jammalamadugu", "checked": false},
            {"city": "Nawanshahr", "checked": false},
            {"city": "Thoubal", "checked": false},
            {"city": "Athni", "checked": false},
            {"city": "Cherthala", "checked": false},
            {"city": "Sidhi", "checked": false},
            {"city": "Farooqnagar", "checked": false},
            {"city": "Peddapuram", "checked": false},
            {"city": "Chirkunda", "checked": false},
            {"city": "Pachora", "checked": false},
            {"city": "Madhepura", "checked": false},
            {"city": "Pithoragarh", "checked": false},
            {"city": "Tumsar", "checked": false},
            {"city": "Phalodi", "checked": false},
            {"city": "Tiruttani", "checked": false},
            {"city": "Rampura Phul", "checked": false},
            {"city": "Perinthalmanna", "checked": false},
            {"city": "Padrauna", "checked": false},
            {"city": "Pipariya", "checked": false},
            {"city": "Dalli-Rajhara", "checked": false},
            {"city": "Punganur", "checked": false},
            {"city": "Mattannur", "checked": false},
            {"city": "Mathura", "checked": false},
            {"city": "Thakurdwara", "checked": false},
            {"city": "Nandivaram-Guduvancheri", "checked": false},
            {"city": "Mulbagal", "checked": false},
            {"city": "Manjlegaon", "checked": false},
            {"city": "Wankaner", "checked": false},
            {"city": "Sillod", "checked": false},
            {"city": "Nidadavole", "checked": false},
            {"city": "Surapura", "checked": false},
            {"city": "Rajagangapur", "checked": false},
            {"city": "Sheikhpura", "checked": false},
            {"city": "Parlakhemundi", "checked": false},
            {"city": "Kalimpong", "checked": false},
            {"city": "Siruguppa", "checked": false},
            {"city": "Arvi", "checked": false},
            {"city": "Limbdi", "checked": false},
            {"city": "Barpeta", "checked": false},
            {"city": "Manglaur", "checked": false},
            {"city": "Repalle", "checked": false},
            {"city": "Mudhol", "checked": false},
            {"city": "Shujalpur", "checked": false},
            {"city": "Mandvi", "checked": false},
            {"city": "Thangadh", "checked": false},
            {"city": "Sironj", "checked": false},
            {"city": "Nandura", "checked": false},
            {"city": "Shoranur", "checked": false},
            {"city": "Nathdwara", "checked": false},
            {"city": "Periyakulam", "checked": false},
            {"city": "Sultanganj", "checked": false},
            {"city": "Medak", "checked": false},
            {"city": "Narayanpet", "checked": false},
            {"city": "Raxaul Bazar", "checked": false},
            {"city": "Rajauri", "checked": false},
            {"city": "Pernampattu", "checked": false},
            {"city": "Nainital", "checked": false},
            {"city": "Ramachandrapuram", "checked": false},
            {"city": "Vaijapur", "checked": false},
            {"city": "Nangal", "checked": false},
            {"city": "Sidlaghatta", "checked": false},
            {"city": "Punch", "checked": false},
            {"city": "Pandhurna", "checked": false},
            {"city": "Wadgaon Road", "checked": false},
            {"city": "Talcher", "checked": false},
            {"city": "Varkala", "checked": false},
            {"city": "Pilani", "checked": false},
            {"city": "Nowgong", "checked": false},
            {"city": "Naila Janjgir", "checked": false},
            {"city": "Mapusa", "checked": false},
            {"city": "Vellakoil", "checked": false},
            {"city": "Merta City", "checked": false},
            {"city": "Sivaganga", "checked": false},
            {"city": "Mandideep", "checked": false},
            {"city": "Sailu", "checked": false},
            {"city": "Vyara", "checked": false},
            {"city": "Kovvur", "checked": false},
            {"city": "Vadalur", "checked": false},
            {"city": "Nawabganj", "checked": false},
            {"city": "Padra", "checked": false},
            {"city": "Sainthia", "checked": false},
            {"city": "Siana", "checked": false},
            {"city": "Shahpur", "checked": false},
            {"city": "Sojat", "checked": false},
            {"city": "Noorpur", "checked": false},
            {"city": "Paravoor", "checked": false},
            {"city": "Murtijapur", "checked": false},
            {"city": "Ramnagar", "checked": false},
            {"city": "Sundargarh", "checked": false},
            {"city": "Taki", "checked": false},
            {"city": "Saundatti-Yellamma", "checked": false},
            {"city": "Pathanamthitta", "checked": false},
            {"city": "Wadi", "checked": false},
            {"city": "Rameshwaram", "checked": false},
            {"city": "Tasgaon", "checked": false},
            {"city": "Sikandra Rao", "checked": false},
            {"city": "Sihora", "checked": false},
            {"city": "Tiruvethipuram", "checked": false},
            {"city": "Tiruvuru", "checked": false},
            {"city": "Mehkar", "checked": false},
            {"city": "Peringathur", "checked": false},
            {"city": "Perambalur", "checked": false},
            {"city": "Manvi", "checked": false},
            {"city": "Zunheboto", "checked": false},
            {"city": "Mahnar Bazar", "checked": false},
            {"city": "Attingal", "checked": false},
            {"city": "Shahbad", "checked": false},
            {"city": "Puranpur", "checked": false},
            {"city": "Nelamangala", "checked": false},
            {"city": "Nakodar", "checked": false},
            {"city": "Lunawada", "checked": false},
            {"city": "Murshidabad", "checked": false},
            {"city": "Mahe", "checked": false},
            {"city": "Lanka", "checked": false},
            {"city": "Rudauli", "checked": false},
            {"city": "Tuensang", "checked": false},
            {"city": "Lakshmeshwar", "checked": false},
            {"city": "Zira", "checked": false},
            {"city": "Yawal", "checked": false},
            {"city": "Thana Bhawan", "checked": false},
            {"city": "Ramdurg", "checked": false},
            {"city": "Pulgaon", "checked": false},
            {"city": "Sadasivpet", "checked": false},
            {"city": "Nargund", "checked": false},
            {"city": "Neem-Ka-Thana", "checked": false},
            {"city": "Memari", "checked": false},
            {"city": "Nilanga", "checked": false},
            {"city": "Naharlagun", "checked": false},
            {"city": "Pakaur", "checked": false},
            {"city": "Wai", "checked": false},
            {"city": "Tarikere", "checked": false},
            {"city": "Malavalli", "checked": false},
            {"city": "Raisen", "checked": false},
            {"city": "Lahar", "checked": false},
            {"city": "Uravakonda", "checked": false},
            {"city": "Savanur", "checked": false},
            {"city": "Sirohi", "checked": false},
            {"city": "Udhampur", "checked": false},
            {"city": "Umarga", "checked": false},
            {"city": "Pratapgarh", "checked": false},
            {"city": "Lingsugur", "checked": false},
            {"city": "Usilampatti", "checked": false},
            {"city": "Palia Kalan", "checked": false},
            {"city": "Wokha", "checked": false},
            {"city": "Rajpipla", "checked": false},
            {"city": "Vijayapura", "checked": false},
            {"city": "Rawatbhata", "checked": false},
            {"city": "Sangaria", "checked": false},
            {"city": "Paithan", "checked": false},
            {"city": "Rahuri", "checked": false},
            {"city": "Patti", "checked": false},
            {"city": "Zaidpur", "checked": false},
            {"city": "Lalsot", "checked": false},
            {"city": "Maihar", "checked": false},
            {"city": "Vedaranyam", "checked": false},
            {"city": "Nawapur", "checked": false},
            {"city": "Solan", "checked": false},
            {"city": "Vapi", "checked": false},
            {"city": "Sanawad", "checked": false},
            {"city": "Warisaliganj", "checked": false},
            {"city": "Revelganj", "checked": false},
            {"city": "Sabalgarh", "checked": false},
            {"city": "Tuljapur", "checked": false},
            {"city": "Simdega", "checked": false},
            {"city": "Musabani", "checked": false},
            {"city": "Kodungallur", "checked": false},
            {"city": "Phulabani", "checked": false},
            {"city": "Umreth", "checked": false},
            {"city": "Narsipatnam", "checked": false},
            {"city": "Nautanwa", "checked": false},
            {"city": "Rajgir", "checked": false},
            {"city": "Yellandu", "checked": false},
            {"city": "Sathyamangalam", "checked": false},
            {"city": "Pilibanga", "checked": false},
            {"city": "Morshi", "checked": false},
            {"city": "Pehowa", "checked": false},
            {"city": "Sonepur", "checked": false},
            {"city": "Pappinisseri", "checked": false},
            {"city": "Zamania", "checked": false},
            {"city": "Mihijam", "checked": false},
            {"city": "Purna", "checked": false},
            {"city": "Puliyankudi", "checked": false},
            {"city": "Shikarpur, Bulandshahr", "checked": false},
            {"city": "Umaria", "checked": false},
            {"city": "Porsa", "checked": false},
            {"city": "Naugawan Sadat", "checked": false},
            {"city": "Fatehpur Sikri", "checked": false},
            {"city": "Manuguru", "checked": false},
            {"city": "Udaipur", "checked": false},
            {"city": "Pipar City", "checked": false},
            {"city": "Pattamundai", "checked": false},
            {"city": "Nanjikottai", "checked": false},
            {"city": "Taranagar", "checked": false},
            {"city": "Yerraguntla", "checked": false},
            {"city": "Satana", "checked": false},
            {"city": "Sherghati", "checked": false},
            {"city": "Sankeshwara", "checked": false},
            {"city": "Madikeri", "checked": false},
            {"city": "Thuraiyur", "checked": false},
            {"city": "Sanand", "checked": false},
            {"city": "Rajula", "checked": false},
            {"city": "Kyathampalle", "checked": false},
            {"city": "Shahabad, Rampur", "checked": false},
            {"city": "Tilda Newra", "checked": false},
            {"city": "Narsinghgarh", "checked": false},
            {"city": "Chittur-Thathamangalam", "checked": false},
            {"city": "Malaj Khand", "checked": false},
            {"city": "Sarangpur", "checked": false},
            {"city": "Robertsganj", "checked": false},
            {"city": "Sirkali", "checked": false},
            {"city": "Radhanpur", "checked": false},
            {"city": "Tiruchendur", "checked": false},
            {"city": "Utraula", "checked": false},
            {"city": "Patratu", "checked": false},
            {"city": "Vijainagar, Ajmer", "checked": false},
            {"city": "Periyasemur", "checked": false},
            {"city": "Pathri", "checked": false},
            {"city": "Sadabad", "checked": false},
            {"city": "Talikota", "checked": false},
            {"city": "Sinnar", "checked": false},
            {"city": "Mungeli", "checked": false},
            {"city": "Sedam", "checked": false},
            {"city": "Shikaripur", "checked": false},
            {"city": "Sumerpur", "checked": false},
            {"city": "Sattur", "checked": false},
            {"city": "Sugauli", "checked": false},
            {"city": "Lumding", "checked": false},
            {"city": "Vandavasi", "checked": false},
            {"city": "Titlagarh", "checked": false},
            {"city": "Uchgaon", "checked": false},
            {"city": "Mokokchung", "checked": false},
            {"city": "Paschim Punropara", "checked": false},
            {"city": "Sagwara", "checked": false},
            {"city": "Ramganj Mandi", "checked": false},
            {"city": "Tarakeswar", "checked": false},
            {"city": "Mahalingapura", "checked": false},
            {"city": "Dharmanagar", "checked": false},
            {"city": "Mahemdabad", "checked": false},
            {"city": "Manendragarh", "checked": false},
            {"city": "Uran", "checked": false},
            {"city": "Tharamangalam", "checked": false},
            {"city": "Tirukkoyilur", "checked": false},
            {"city": "Pen", "checked": false},
            {"city": "Makhdumpur", "checked": false},
            {"city": "Maner", "checked": false},
            {"city": "Oddanchatram", "checked": false},
            {"city": "Palladam", "checked": false},
            {"city": "Mundi", "checked": false},
            {"city": "Nabarangapur", "checked": false},
            {"city": "Mudalagi", "checked": false},
            {"city": "Samalkha", "checked": false},
            {"city": "Nepanagar", "checked": false},
            {"city": "Karjat", "checked": false},
            {"city": "Ranavav", "checked": false},
            {"city": "Pedana", "checked": false},
            {"city": "Pinjore", "checked": false},
            {"city": "Lakheri", "checked": false},
            {"city": "Pasan", "checked": false},
            {"city": "Puttur", "checked": false},
            {"city": "Vadakkuvalliyur", "checked": false},
            {"city": "Tirukalukundram", "checked": false},
            {"city": "Mahidpur", "checked": false},
            {"city": "Mussoorie", "checked": false},
            {"city": "Muvattupuzha", "checked": false},
            {"city": "Rasra", "checked": false},
            {"city": "Udaipurwati", "checked": false},
            {"city": "Manwath", "checked": false},
            {"city": "Adoor", "checked": false},
            {"city": "Uthamapalayam", "checked": false},
            {"city": "Partur", "checked": false},
            {"city": "Nahan", "checked": false},
            {"city": "Ladwa", "checked": false},
            {"city": "Mankachar", "checked": false},
            {"city": "Nongstoin", "checked": false},
            {"city": "Losal", "checked": false},
            {"city": "Sri Madhopur", "checked": false},
            {"city": "Ramngarh", "checked": false},
            {"city": "Mavelikkara", "checked": false},
            {"city": "Rawatsar", "checked": false},
            {"city": "Rajakhera", "checked": false},
            {"city": "Lar", "checked": false},
            {"city": "Lal Gopalganj Nindaura", "checked": false},
            {"city": "Muddebihal", "checked": false},
            {"city": "Sirsaganj", "checked": false},
            {"city": "Shahpura", "checked": false},
            {"city": "Surandai", "checked": false},
            {"city": "Sangole", "checked": false},
            {"city": "Pavagada", "checked": false},
            {"city": "Tharad", "checked": false},
            {"city": "Mansa", "checked": false},
            {"city": "Umbergaon", "checked": false},
            {"city": "Mavoor", "checked": false},
            {"city": "Nalbari", "checked": false},
            {"city": "Talaja", "checked": false},
            {"city": "Malur", "checked": false},
            {"city": "Mangrulpir", "checked": false},
            {"city": "Soro", "checked": false},
            {"city": "Shahpura", "checked": false},
            {"city": "Vadnagar", "checked": false},
            {"city": "Raisinghnagar", "checked": false},
            {"city": "Sindhagi", "checked": false},
            {"city": "Sanduru", "checked": false},
            {"city": "Sohna", "checked": false},
            {"city": "Manavadar", "checked": false},
            {"city": "Pihani", "checked": false},
            {"city": "Safidon", "checked": false},
            {"city": "Risod", "checked": false},
            {"city": "Rosera", "checked": false},
            {"city": "Sankari", "checked": false},
            {"city": "Malpura", "checked": false},
            {"city": "Sonamukhi", "checked": false},
            {"city": "Shamsabad, Agra", "checked": false},
            {"city": "Nokha", "checked": false},
            {"city": "PandUrban Agglomeration", "checked": false},
            {"city": "Mainaguri", "checked": false},
            {"city": "Afzalpur", "checked": false},
            {"city": "Shirur", "checked": false},
            {"city": "Salaya", "checked": false},
            {"city": "Shenkottai", "checked": false},
            {"city": "Pratapgarh", "checked": false},
            {"city": "Vadipatti", "checked": false},
            {"city": "Nagarkurnool", "checked": false},
            {"city": "Savner", "checked": false},
            {"city": "Sasvad", "checked": false},
            {"city": "Rudrapur", "checked": false},
            {"city": "Soron", "checked": false},
            {"city": "Sholingur", "checked": false},
            {"city": "Pandharkaoda", "checked": false},
            {"city": "Perumbavoor", "checked": false},
            {"city": "Maddur", "checked": false},
            {"city": "Nadbai", "checked": false},
            {"city": "Talode", "checked": false},
            {"city": "Shrigonda", "checked": false},
            {"city": "Madhugiri", "checked": false},
            {"city": "Tekkalakote", "checked": false},
            {"city": "Seoni-Malwa", "checked": false},
            {"city": "Shirdi", "checked": false},
            {"city": "SUrban Agglomerationr", "checked": false},
            {"city": "Terdal", "checked": false},
            {"city": "Raver", "checked": false},
            {"city": "Tirupathur", "checked": false},
            {"city": "Taraori", "checked": false},
            {"city": "Mukhed", "checked": false},
            {"city": "Manachanallur", "checked": false},
            {"city": "Rehli", "checked": false},
            {"city": "Sanchore", "checked": false},
            {"city": "Rajura", "checked": false},
            {"city": "Piro", "checked": false},
            {"city": "Mudabidri", "checked": false},
            {"city": "Vadgaon Kasba", "checked": false},
            {"city": "Nagar", "checked": false},
            {"city": "Vijapur", "checked": false},
            {"city": "Viswanatham", "checked": false},
            {"city": "Polur", "checked": false},
            {"city": "Panagudi", "checked": false},
            {"city": "Manawar", "checked": false},
            {"city": "Tehri", "checked": false},
            {"city": "Samdhan", "checked": false},
            {"city": "Pardi", "checked": false},
            {"city": "Rahatgarh", "checked": false},
            {"city": "Panagar", "checked": false},
            {"city": "Uthiramerur", "checked": false},
            {"city": "Tirora", "checked": false},
            {"city": "Rangia", "checked": false},
            {"city": "Sahjanwa", "checked": false},
            {"city": "Wara Seoni", "checked": false},
            {"city": "Magadi", "checked": false},
            {"city": "Rajgarh (Alwar)", "checked": false},
            {"city": "Rafiganj", "checked": false},
            {"city": "Tarana", "checked": false},
            {"city": "Rampur Maniharan", "checked": false},
            {"city": "Sheoganj", "checked": false},
            {"city": "Raikot", "checked": false},
            {"city": "Pauri", "checked": false},
            {"city": "Sumerpur", "checked": false},
            {"city": "Navalgund", "checked": false},
            {"city": "Shahganj", "checked": false},
            {"city": "Marhaura", "checked": false},
            {"city": "Tulsipur", "checked": false},
            {"city": "Sadri", "checked": false},
            {"city": "Thiruthuraipoondi", "checked": false},
            {"city": "Shiggaon", "checked": false},
            {"city": "Pallapatti", "checked": false},
            {"city": "Mahendragarh", "checked": false},
            {"city": "Sausar", "checked": false},
            {"city": "Ponneri", "checked": false},
            {"city": "Mahad", "checked": false},
            {"city": "Lohardaga", "checked": false},
            {"city": "Tirwaganj", "checked": false},
            {"city": "Margherita", "checked": false},
            {"city": "Sundarnagar", "checked": false},
            {"city": "Rajgarh", "checked": false},
            {"city": "Mangaldoi", "checked": false},
            {"city": "Renigunta", "checked": false},
            {"city": "Longowal", "checked": false},
            {"city": "Ratia", "checked": false},
            {"city": "Lalgudi", "checked": false},
            {"city": "Shrirangapattana", "checked": false},
            {"city": "Niwari", "checked": false},
            {"city": "Natham", "checked": false},
            {"city": "Unnamalaikadai", "checked": false},
            {"city": "PurqUrban", "checked": false},
            {"city": "Shamsabad", "checked": false},
            {"city": "Mirganj", "checked": false},
            {"city": "Todaraisingh", "checked": false},
            {"city": "Warhapur", "checked": false},
            {"city": "Rajam", "checked": false},
            {"city": "Urmar Tanda", "checked": false},
            {"city": "Lonar", "checked": false},
            {"city": "Powayan", "checked": false},
            {"city": "P.N.Patti", "checked": false},
            {"city": "Palampur", "checked": false},
            {"city": "Srisailam ", "checked": false},
            {"city": "Sindagi", "checked": false},
            {"city": "Sandi", "checked": false},
            {"city": "Vaikom", "checked": false},
            {"city": "Malda", "checked": false},
            {"city": "Tharangambadi", "checked": false},
            {"city": "Sakaleshapura", "checked": false},
            {"city": "Lalganj", "checked": false},
            {"city": "Malkangiri", "checked": false},
            {"city": "Rapar", "checked": false},
            {"city": "Mauganj", "checked": false},
            {"city": "Todabhim", "checked": false},
            {"city": "Srinivaspur", "checked": false},
            {"city": "Murliganj", "checked": false},
            {"city": "Reengus", "checked": false},
            {"city": "Sawantwadi", "checked": false},
            {"city": "Tittakudi", "checked": false},
            {"city": "Lilong", "checked": false},
            {"city": "Rajaldesar", "checked": false},
            {"city": "Pathardi", "checked": false},
            {"city": "Achhnera", "checked": false},
            {"city": "Pacode", "checked": false},
            {"city": "Naraura", "checked": false},
            {"city": "Nakur", "checked": false},
            {"city": "Palai", "checked": false},
            {"city": "Morinda, India", "checked": false},
            {"city": "Manasa", "checked": false},
            {"city": "Nainpur", "checked": false},
            {"city": "Sahaspur", "checked": false},
            {"city": "Pauni", "checked": false},
            {"city": "Prithvipur", "checked": false},
            {"city": "Ramtek", "checked": false},
            {"city": "Silapathar", "checked": false},
            {"city": "Songadh", "checked": false},
            {"city": "Safipur", "checked": false},
            {"city": "Sohagpur", "checked": false},
            {"city": "Mul", "checked": false},
            {"city": "Sadulshahar", "checked": false},
            {"city": "Phillaur", "checked": false},
            {"city": "Sambhar", "checked": false},
            {"city": "Prantij", "checked": false},
            {"city": "Nagla", "checked": false},
            {"city": "Pattran", "checked": false},
            {"city": "Mount Abu", "checked": false},
            {"city": "Reoti", "checked": false},
            {"city": "Tenu dam-cum-Kathhara", "checked": false},
            {"city": "Panchla", "checked": false},
            {"city": "Sitarganj", "checked": false},
            {"city": "Pasighat", "checked": false},
            {"city": "Motipur", "checked": false},
            {"city": "O' Valley", "checked": false},
            {"city": "Raghunathpur", "checked": false},
            {"city": "Suriyampalayam", "checked": false},
            {"city": "Qadian", "checked": false},
            {"city": "Rairangpur", "checked": false},
            {"city": "Silvassa", "checked": false},
            {"city": "Nowrozabad (Khodargama)", "checked": false},
            {"city": "Mangrol", "checked": false},
            {"city": "Soyagaon", "checked": false},
            {"city": "Sujanpur", "checked": false},
            {"city": "Manihari", "checked": false},
            {"city": "Sikanderpur", "checked": false},
            {"city": "Mangalvedhe", "checked": false},
            {"city": "Phulera", "checked": false},
            {"city": "Ron", "checked": false},
            {"city": "Sholavandan", "checked": false},
            {"city": "Saidpur", "checked": false},
            {"city": "Shamgarh", "checked": false},
            {"city": "Thammampatti", "checked": false},
            {"city": "Maharajpur", "checked": false},
            {"city": "Multai", "checked": false},
            {"city": "Mukerian", "checked": false},
            {"city": "Sirsi", "checked": false},
            {"city": "Purwa", "checked": false},
            {"city": "Sheohar", "checked": false},
            {"city": "Namagiripettai", "checked": false},
            {"city": "Parasi", "checked": false},
            {"city": "Lathi", "checked": false},
            {"city": "Lalganj", "checked": false},
            {"city": "Narkhed", "checked": false},
            {"city": "Mathabhanga", "checked": false},
            {"city": "Shendurjana", "checked": false},
            {"city": "Peravurani", "checked": false},
            {"city": "Mariani", "checked": false},
            {"city": "Phulpur", "checked": false},
            {"city": "Rania", "checked": false},
            {"city": "Pali", "checked": false},
            {"city": "Pachore", "checked": false},
            {"city": "Parangipettai", "checked": false},
            {"city": "Pudupattinam", "checked": false},
            {"city": "Panniyannur", "checked": false},
            {"city": "Maharajganj", "checked": false},
            {"city": "Rau", "checked": false},
            {"city": "Monoharpur", "checked": false},
            {"city": "Mandawa", "checked": false},
            {"city": "Marigaon", "checked": false},
            {"city": "Pallikonda", "checked": false},
            {"city": "Pindwara", "checked": false},
            {"city": "Shishgarh", "checked": false},
            {"city": "Patur", "checked": false},
            {"city": "Mayang Imphal", "checked": false},
            {"city": "Mhowgaon", "checked": false},
            {"city": "Guruvayoor", "checked": false},
            {"city": "Mhaswad", "checked": false},
            {"city": "Sahawar", "checked": false},
            {"city": "Sivagiri", "checked": false},
            {"city": "Mundargi", "checked": false},
            {"city": "Punjaipugalur", "checked": false},
            {"city": "Kailasahar", "checked": false},
            {"city": "Samthar", "checked": false},
            {"city": "Sakti", "checked": false},
            {"city": "Sadalagi", "checked": false},
            {"city": "Silao", "checked": false},
            {"city": "Mandalgarh", "checked": false},
            {"city": "Loha", "checked": false},
            {"city": "Pukhrayan", "checked": false},
            {"city": "Padmanabhapuram", "checked": false},
            {"city": "Belonia", "checked": false},
            {"city": "Saiha", "checked": false},
            {"city": "Srirampore", "checked": false},
            {"city": "Talwara", "checked": false},
            {"city": "Puthuppally", "checked": false},
            {"city": "Khowai", "checked": false},
            {"city": "Vijaypur", "checked": false},
            {"city": "Takhatgarh", "checked": false},
            {"city": "Thirupuvanam", "checked": false},
            {"city": "Adra", "checked": false},
            {"city": "Piriyapatna", "checked": false},
            {"city": "Obra", "checked": false},
            {"city": "Adalaj", "checked": false},
            {"city": "Nandgaon", "checked": false},
            {"city": "Barh", "checked": false},
            {"city": "Chhapra", "checked": false},
            {"city": "Panamattom", "checked": false},
            {"city": "Niwai", "checked": false},
            {"city": "Bageshwar", "checked": false},
            {"city": "Tarbha", "checked": false},
            {"city": "Adyar", "checked": false},
            {"city": "Narsinghgarh", "checked": false},
            {"city": "Warud", "checked": false},
            {"city": "Asarganj", "checked": false},
            {"city": "Sarsod", "checked": false}];

        var diseases=[
            {
                "disease":"Noninflammatory disorders of testis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of bladder",
                "checked":false
            },
            {
                "disease":"Reiter's disease left shoulder",
                "checked":false
            },
            {
                "disease":"Opioid related disorders",
                "checked":false
            },
            {
                "disease":"Adhesive left middle ear disease",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of testis",
                "checked":false
            },
            {
                "disease":"Reaction to severe stress and adjustment disorders",
                "checked":false
            },
            {
                "disease":"Alcohol abuse with alcohol-induced anxiety disorder",
                "checked":false
            },
            {
                "disease":"Circadian rhythm sleep disorder jet lag type",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of epididymis",
                "checked":false
            },
            {
                "disease":"Rumination disorder of infancy",
                "checked":false
            },
            {
                "disease":"Liver and biliary tract disorders in pregnancy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of short bones of left lower limb",
                "checked":false
            },
            {
                "disease":"Renal failure following (induced) termination of pregnancy",
                "checked":false
            },
            {
                "disease":"Arthropathy in neoplastic disease",
                "checked":false
            },
            {
                "disease":"Plasma cell leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of upper lobe right bronchus or lung",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with acute hepatitis",
                "checked":false
            },
            {
                "disease":"Prolymphocytic leukemia of T-cell type",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of short bones of lower limb",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule left ankle and foot",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) vascular disorders right side",
                "checked":false
            },
            {
                "disease":"Cervical disc disorder with myelopathy mid-cervical region",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of ovary",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of peripheral nerves and autonomic nervous system of pelvis",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus [HIV] disease complicating childbirth",
                "checked":false
            },
            {
                "disease":"McArdle disease",
                "checked":false
            },
            {
                "disease":"Cardiac arrest of newborn",
                "checked":false
            },
            {
                "disease":"Poikiloderma vasculare atrophicans",
                "checked":false
            },
            {
                "disease":"Bipolar disorder in partial remission most recent episode depressed",
                "checked":false
            },
            {
                "disease":"Injury of pulmonary blood vessels",
                "checked":false
            },
            {
                "disease":"Acute myeloblastic leukemia",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of intestinal tract",
                "checked":false
            },
            {
                "disease":"Influenza due to unidentified influenza virus with myocarditis",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right tibia",
                "checked":false
            },
            {
                "disease":"disease of the respiratory system complicating childbirth",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of endocervix",
                "checked":false
            },
            {
                "disease":"Chronic lymphocytic leukemia of B-cell type",
                "checked":false
            },
            {
                "disease":"Laceration of left renal vein",
                "checked":false
            },
            {
                "disease":"Pulmonary alveolar microlithiasis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cauda equina",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of left hand",
                "checked":false
            },
            {
                "disease":"Vibrio vulnificus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of extrahepatic bile duct",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of lip oral cavity and pharynx",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of right elbow",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with diabetic chronic kidney disease",
                "checked":false
            },
            {
                "disease":"Disseminated herpesviral disease",
                "checked":false
            },
            {
                "disease":"Disorder of ligament right hip",
                "checked":false
            },
            {
                "disease":"Renal agenesis unilateral",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left epididymis",
                "checked":false
            },
            {
                "disease":"Crohn's disease of small intestine without complications",
                "checked":false
            },
            {
                "disease":"Patellofemoral disorders left knee",
                "checked":false
            },
            {
                "disease":"Gingivitis and periodontal disease",
                "checked":false
            },
            {
                "disease":"Acute coronary thrombosis not resulting in myocardial infarction",
                "checked":false
            },
            {
                "disease":"Herpesviral ocular disease",
                "checked":false
            },
            {
                "disease":"Disorders of vestibular function",
                "checked":false
            },
            {
                "disease":"Acute Chagas' disease without heart involvement",
                "checked":false
            },
            {
                "disease":"ST elevation (STEMI) myocardial infarction involving right coronary artery",
                "checked":false
            },
            {
                "disease":"Nerve root and plexus compressions in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of lip",
                "checked":false
            },
            {
                "disease":"Atresia of pulmonary artery",
                "checked":false
            },
            {
                "disease":"Liver and biliary tract disorders in pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Acute myelomonocytic leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic dermatitis",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of left adrenal gland",
                "checked":false
            },
            {
                "disease":"Glaucoma in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Chronic nephritic syndrome with dense deposit disease",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of craniopharyngeal duct",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lacrimal gland and duct",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left retina",
                "checked":false
            },
            {
                "disease":"Disorders of amino-acid transport",
                "checked":false
            },
            {
                "disease":"Chronic myelomonocytic leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease knee",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of ureter",
                "checked":false
            },
            {
                "disease":"Acute myeloblastic leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere left thigh",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of parathyroid gland",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with hyperosmolarity with coma",
                "checked":false
            },
            {
                "disease":"Schizoaffective disorder depressive type",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of right ovary",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of retina",
                "checked":false
            },
            {
                "disease":"Chronic kidney disease stage 4 (severe)",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of rectum",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of gum",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic mononeuropathy",
                "checked":false
            },
            {
                "disease":"Aortopulmonary septal defect",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of sublingual gland",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of left knee",
                "checked":false
            },
            {
                "disease":"Liver disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of long bones of left lower limb",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease left shoulder",
                "checked":false
            },
            {
                "disease":"Hairy cell leukemia",
                "checked":false
            },
            {
                "disease":"Erectile dysfunction due to disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Acute transverse myelitis in demyelinating disease of central nervous system",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere lower leg",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right lower limb",
                "checked":false
            },
            {
                "disease":"Deformity of left orbit due to bone disease",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere right upper arm",
                "checked":false
            },
            {
                "disease":"Encounter for screening for lower gastrointestinal disorder",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right epididymis",
                "checked":false
            },
            {
                "disease":"Myocarditis in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere right hand",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left ankle",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of left hip",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of the minor salivary glands",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of bone",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease hand",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of shoulder",
                "checked":false
            },
            {
                "disease":"Coronavirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of extrahepatic bile ducts",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with ketoacidosis without coma",
                "checked":false
            },
            {
                "disease":"Inflammatory disease of uterus except cervix",
                "checked":false
            },
            {
                "disease":"Laceration of renal blood vessel",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) neoplasm right side of brain",
                "checked":false
            },
            {
                "disease":"Granulomatous disorders of skin and subcutaneous tissue",
                "checked":false
            },
            {
                "disease":"Acute erythroid leukemia in remission",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of left bronchus and lung",
                "checked":false
            },
            {
                "disease":"Progressive vascular leukoencephalopathy",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of elbow",
                "checked":false
            },
            {
                "disease":"Brief psychotic disorder",
                "checked":false
            },
            {
                "disease":"Creutzfeldt-Jakob disease",
                "checked":false
            },
            {
                "disease":"Encounter for screening for diabetes mellitus",
                "checked":false
            },
            {
                "disease":"Fibroblastic disorders",
                "checked":false
            },
            {
                "disease":"Background retinopathy and retinal vascular changes",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of cerebral meninges",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of left ankle and foot",
                "checked":false
            },
            {
                "disease":"Sexual aversion disorder",
                "checked":false
            },
            {
                "disease":"Metabolic disorder following failed attempted termination of pregnancy",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment elbow",
                "checked":false
            },
            {
                "disease":"Frontotemporal dementia",
                "checked":false
            },
            {
                "disease":"Meningitis in bacterial disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of brain infratentorial",
                "checked":false
            },
            {
                "disease":"Cataract with neovascularization bilateral",
                "checked":false
            },
            {
                "disease":"Underdosing of phenothiazine antipsychotics and neuroleptics",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with cholestasis",
                "checked":false
            },
            {
                "disease":"Temporomandibular joint disorders",
                "checked":false
            },
            {
                "disease":"Disorders of lacrimal system",
                "checked":false
            },
            {
                "disease":"Late congenital cardiovascular syphilis",
                "checked":false
            },
            {
                "disease":"Sézary disease spleen",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left olfactory nerve",
                "checked":false
            },
            {
                "disease":"Direct infection of knee in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Encounter for screening for respiratory disorder NEC",
                "checked":false
            },
            {
                "disease":"Crohn's disease of small intestine with complications",
                "checked":false
            },
            {
                "disease":"Renal tubulo-interstitial disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Direct infection of joint in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Priapism due to disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Chronic drug-induced interstitial lung disorders",
                "checked":false
            },
            {
                "disease":"Protozoal disease complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Mastoiditis in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Patient's noncompliance with renal dialysis",
                "checked":false
            },
            {
                "disease":"Multiple myeloma and malignant plasma cell neoplasms",
                "checked":false
            },
            {
                "disease":"Cardiac arrest due to anesthesia during pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right ulna",
                "checked":false
            },
            {
                "disease":"disease of the nervous system complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Mathematics disorder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of short bones of right lower limb",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of mouth and pharynx",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of bladder",
                "checked":false
            },
            {
                "disease":"Periodic limb movement disorder",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere ankle and foot",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of left knee",
                "checked":false
            },
            {
                "disease":"Acute pulmonary coccidioidomycosis",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of right wrist",
                "checked":false
            },
            {
                "disease":"Postprocedural cardiac insufficiency following cardiac surgery",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of ascending colon",
                "checked":false
            },
            {
                "disease":"Nonrheumatic pulmonary valve insufficiency",
                "checked":false
            },
            {
                "disease":"Nephrogenic diabetes insipidus",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left ovary",
                "checked":false
            },
            {
                "disease":"Manic episode severe without psychotic symptoms",
                "checked":false
            },
            {
                "disease":"Acute myelomonocytic leukemia",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of right wrist",
                "checked":false
            },
            {
                "disease":"Crohn's disease of large intestine with abscess",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease ulna and radius",
                "checked":false
            },
            {
                "disease":"Isolated proteinuria with dense deposit disease",
                "checked":false
            },
            {
                "disease":"Mechanical complication of cardiac electronic device",
                "checked":false
            },
            {
                "disease":"Acute megakaryoblastic leukemia in remission",
                "checked":false
            },
            {
                "disease":"Vascular syndromes of brain in cerebrovascular disease",
                "checked":false
            },
            {
                "disease":"Sickle-cell disorders",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with oral complications",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of right wrist",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor left knee",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of spinal meninges",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease right ankle and foot",
                "checked":false
            },
            {
                "disease":"Papulosquamous disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of skin and subcutaneous tissue of limb",
                "checked":false
            },
            {
                "disease":"Poisoning by coronary vasodilators undetermined",
                "checked":false
            },
            {
                "disease":"Encounter for screening for metabolic disorder",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of large intestine and rectum",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right orbit",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of rectum",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of medulla of adrenal gland",
                "checked":false
            },
            {
                "disease":"Diverticular disease of large intestine without perforation or abscess",
                "checked":false
            },
            {
                "disease":"Hantavirus (cardio)-pulmonary syndrome [HPS] [HCPS]",
                "checked":false
            },
            {
                "disease":"Chronic obstructive pulmonary disease with (acute) exacerbation",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with ketoacidosis",
                "checked":false
            },
            {
                "disease":"Major depressive disorder single episode",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease lower leg",
                "checked":false
            },
            {
                "disease":"Reiter's disease vertebrae",
                "checked":false
            },
            {
                "disease":"Short stature due to endocrine disorder",
                "checked":false
            },
            {
                "disease":"Autonomic neuropathy in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Presence of cardiac and vascular implants and grafts",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of right adrenal gland",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with circulatory complications",
                "checked":false
            },
            {
                "disease":"Acute myelomonocytic leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of left testis",
                "checked":false
            },
            {
                "disease":"Disorders of peroxisome biogenesis",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode mixed severe with psychotic features",
                "checked":false
            },
            {
                "disease":"Metabolic disorder following incomplete spontaneous abortion",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of stomach",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of pelvis",
                "checked":false
            },
            {
                "disease":"Disorders of fructose metabolism",
                "checked":false
            },
            {
                "disease":"Malformation of coronary vessels",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of vulva",
                "checked":false
            },
            {
                "disease":"Sézary disease lymph nodes of multiple sites",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of right kidney",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of testis",
                "checked":false
            },
            {
                "disease":"Aftercare following surgery for neoplasm",
                "checked":false
            },
            {
                "disease":"Corneal disorder due to contact lens left eye",
                "checked":false
            },
            {
                "disease":"Hepatopulmonary syndrome",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease right thigh",
                "checked":false
            },
            {
                "disease":"Glycogen storage disease",
                "checked":false
            },
            {
                "disease":"Liver and biliary tract disorders in pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of parotid gland",
                "checked":false
            },
            {
                "disease":"Intermittent explosive disorder",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of scapula and long bones of upper limb",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of appendix",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere upper arm",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 1 in pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Abnormal findings on diagnostic imaging of heart and coronary circulation",
                "checked":false
            },
            {
                "disease":"Partial loss of teeth due to periodontal disease class I",
                "checked":false
            },
            {
                "disease":"Systemic disorders of connective tissue in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Pregnancy related renal disease second trimester",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease knee",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left tibia",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease left hip",
                "checked":false
            },
            {
                "disease":"Disorders of autonomic nervous system",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule",
                "checked":false
            },
            {
                "disease":"Disorders of porphyrin and bilirubin metabolism",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of bronchus and lung",
                "checked":false
            },
            {
                "disease":"Acute myeloblastic leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of liver",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right olfactory nerve",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of cranial nerves",
                "checked":false
            },
            {
                "disease":"Myelopathy in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease hip",
                "checked":false
            },
            {
                "disease":"Reiter's disease right knee",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere upper arm",
                "checked":false
            },
            {
                "disease":"Disorders of zinc metabolism",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor",
                "checked":false
            },
            {
                "disease":"Disorders of gallbladder biliary tract and pancreas in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Vertiginous syndromes in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Vertiginous syndromes in disease classified elsewhere right ear",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left upper limb",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of shoulder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of right bronchus and lung",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of carotid body",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of upper third of esophagus",
                "checked":false
            },
            {
                "disease":"Corneal disorder due to contact lens",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of left hand",
                "checked":false
            },
            {
                "disease":"Cardiac arrest following failed attempted termination of pregnancy",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of hand",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease left elbow",
                "checked":false
            },
            {
                "disease":"Acute idiopathic pulmonary hemorrhage in infants",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis knee",
                "checked":false
            },
            {
                "disease":"Reiter's disease multiple sites",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of right hip",
                "checked":false
            },
            {
                "disease":"Recrudescent typhus [Brill's disease]",
                "checked":false
            },
            {
                "disease":"Glomerular disease in systemic lupus erythematosus",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left broad ligament",
                "checked":false
            },
            {
                "disease":"Antiphospholipid antibody with hemorrhagic disorder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of upper lobe bronchus or lung",
                "checked":false
            },
            {
                "disease":"Adverse effect of cardiac-stimulant glycosides and drugs of similar action",
                "checked":false
            },
            {
                "disease":"Disorders of iris and ciliary body in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus without complications",
                "checked":false
            },
            {
                "disease":"Crohn's disease of both small and large intestine",
                "checked":false
            },
            {
                "disease":"Sexual arousal disorders",
                "checked":false
            },
            {
                "disease":"Mature B-cell leukemia Burkitt-type",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor vertebrae",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of short bones of left upper limb",
                "checked":false
            },
            {
                "disease":"Hallucinogen related disorders",
                "checked":false
            },
            {
                "disease":"Major depressive disorder recurrent severe with psychotic symptoms",
                "checked":false
            },
            {
                "disease":"Nonrheumatic mitral valve disorders",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor multiple sites",
                "checked":false
            },
            {
                "disease":"Encounter for care involving renal dialysis",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor left hand",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cecum",
                "checked":false
            },
            {
                "disease":"Wegener's granulomatosis with renal involvement",
                "checked":false
            },
            {
                "disease":"Renal agenesis bilateral",
                "checked":false
            },
            {
                "disease":"Adjustment disorder with depressed mood",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease shoulder",
                "checked":false
            },
            {
                "disease":"Hydrops fetalis due to hemolytic disease",
                "checked":false
            },
            {
                "disease":"Bronchopulmonary dysplasia originating in the perinatal period",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease left ankle and foot",
                "checked":false
            },
            {
                "disease":"Hypertrophic disorders of skin",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left kidney except renal pelvis",
                "checked":false
            },
            {
                "disease":"Prolymphocytic leukemia of T-cell type in remission",
                "checked":false
            },
            {
                "disease":"Ulceration of vulva in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Postprocedural cardiac insufficiency",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right spermatic cord",
                "checked":false
            },
            {
                "disease":"Disorder of ligament hand",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode depressed moderate",
                "checked":false
            },
            {
                "disease":"Disorders of sclera",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasms",
                "checked":false
            },
            {
                "disease":"Direct infection of hip in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of postcricoid region",
                "checked":false
            },
            {
                "disease":"Acute lymphoblastic leukemia [ALL]",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of anterior surface of epiglottis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pineal gland",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left renal pelvis",
                "checked":false
            },
            {
                "disease":"Complete loss of teeth due to periodontal disease class III",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of hand",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere lumbar region",
                "checked":false
            },
            {
                "disease":"Anemia in chronic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Tay-Sachs disease",
                "checked":false
            },
            {
                "disease":"Rheumatic disorders of both mitral and aortic valves",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lateral wall of oropharynx",
                "checked":false
            },
            {
                "disease":"Harada's disease bilateral",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of cornea",
                "checked":false
            },
            {
                "disease":"Pulmonary complications of anesthesia during the puerperium",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of splenic flexure",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of shoulder",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) inflammatory disorders",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 2 in pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Disorders of plasma-protein metabolism not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart disease complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Disorders of arteries arterioles and capillaries in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of ill-defined sites within the digestive system",
                "checked":false
            },
            {
                "disease":"Neoplasm related pain (acute) (chronic)",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of retina",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ureter",
                "checked":false
            },
            {
                "disease":"Encounter for screening for dental disorders",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of heart mediastinum and pleura",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of right eye and adnexa",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of left shoulder",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus [HIV] disease",
                "checked":false
            },
            {
                "disease":"Direct infections of joint in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Patellofemoral disorders right knee",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of appendix",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic peripheral angiopathy without gangrene",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment left elbow",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with ketoacidosis",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of long bones of left lower limb",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor left elbow",
                "checked":false
            },
            {
                "disease":"Disorders of glycine metabolism",
                "checked":false
            },
            {
                "disease":"Protozoal disease complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Prolymphocytic leukemia of T-cell type not having achieved remission",
                "checked":false
            },
            {
                "disease":"Alpers disease",
                "checked":false
            },
            {
                "disease":"Gender identity disorders",
                "checked":false
            },
            {
                "disease":"Vascular parkinsonism",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere cervicothoracic region",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of knee",
                "checked":false
            },
            {
                "disease":"Amnestic disorder due to known physiological condition",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of soft tissue of retroperitoneum and peritoneum",
                "checked":false
            },
            {
                "disease":"Poisoning by adverse effect of and underdosing of coronary vasodilators",
                "checked":false
            },
            {
                "disease":"Disorders of tryptophan metabolism",
                "checked":false
            },
            {
                "disease":"Influenza due to unidentified influenza virus with encephalopathy",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of left ovary",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of hard palate",
                "checked":false
            },
            {
                "disease":"Prolymphocytic leukemia of B-cell type",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment right shoulder",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) neoplasm",
                "checked":false
            },
            {
                "disease":"Noninfective disorders of pinna bilateral",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease right shoulder",
                "checked":false
            },
            {
                "disease":"Moyamoya disease",
                "checked":false
            },
            {
                "disease":"Acute pulmonary insufficiency following nonthoracic surgery",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with kidney complications",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere left forearm",
                "checked":false
            },
            {
                "disease":"Bipolar disorder",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of left adrenal gland",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of heart",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of right ankle and foot",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with hyperosmolarity with coma",
                "checked":false
            },
            {
                "disease":"Rheumatic aortic valve disease",
                "checked":false
            },
            {
                "disease":"Fluency disorder following nontraumatic subarachnoid hemorrhage",
                "checked":false
            },
            {
                "disease":"Coronary angioplasty status",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of skin and subcutaneous tissue of head face and neck",
                "checked":false
            },
            {
                "disease":"Circadian rhythm sleep disorder shift work type",
                "checked":false
            },
            {
                "disease":"Disorders of calcium metabolism",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic amyotrophy",
                "checked":false
            },
            {
                "disease":"Inhalant related disorders",
                "checked":false
            },
            {
                "disease":"Psychological abuse complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Encounter for screening for digestive system disorders",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment left knee",
                "checked":false
            },
            {
                "disease":"Rheumatic mitral valve disease",
                "checked":false
            },
            {
                "disease":"Agoraphobia without panic disorder",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of multiple sites",
                "checked":false
            },
            {
                "disease":"disease of the digestive system complicating childbirth",
                "checked":false
            },
            {
                "disease":"Disorder of ligament left hand",
                "checked":false
            },
            {
                "disease":"Direct infection of hand in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment elbow",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left acoustic nerve",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of brain",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of urethra",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with ketoacidosis without coma",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of stomach",
                "checked":false
            },
            {
                "disease":"Disorders of trigeminal nerve",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of epididymis",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic autonomic (poly)neuropathy",
                "checked":false
            },
            {
                "disease":"Chronic obstructive pulmonary disease with acute lower respiratory infection",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of soft palate",
                "checked":false
            },
            {
                "disease":"Bipolar disorder in full remission most recent episode depressed",
                "checked":false
            },
            {
                "disease":"Major laceration of pulmonary blood vessels",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of anterior floor of mouth",
                "checked":false
            },
            {
                "disease":"Injury of renal blood vessels",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left foot",
                "checked":false
            },
            {
                "disease":"Leigh's disease",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of right kidney and renal pelvis",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of left elbow",
                "checked":false
            },
            {
                "disease":"Diabetes insipidus",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of middle third of esophagus",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart and chronic kidney disease complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Laceration of right renal vein",
                "checked":false
            },
            {
                "disease":"Congenital pulmonary valve insufficiency",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of spinal cord",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of soft tissue of peritoneum",
                "checked":false
            },
            {
                "disease":"Leakage of coronary artery bypass graft",
                "checked":false
            },
            {
                "disease":"Endocarditis and heart valve disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Protozoal disease complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere ankle and foot",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of endocrine pancreas",
                "checked":false
            },
            {
                "disease":"Pulmonary embolism without acute cor pulmonale",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with ketoacidosis without coma",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right lacrimal gland and duct",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Inflammatory disease of cervix uteri",
                "checked":false
            },
            {
                "disease":"Corneal disorder due to contact lens bilateral",
                "checked":false
            },
            {
                "disease":"Corneal deposits in metabolic disorders left eye",
                "checked":false
            },
            {
                "disease":"Cat-scratch disease",
                "checked":false
            },
            {
                "disease":"Psychomotor deficit",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of adrenal gland",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis multiple sites",
                "checked":false
            },
            {
                "disease":"Nerve root and plexus disorders",
                "checked":false
            },
            {
                "disease":"Adverse effect of phenothiazine antipsychotics and neuroleptics",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with skin complications",
                "checked":false
            },
            {
                "disease":"Chronic vascular disorders of intestine",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere hand",
                "checked":false
            },
            {
                "disease":"Peroxisomal disorders",
                "checked":false
            },
            {
                "disease":"Cannabis related disorders",
                "checked":false
            },
            {
                "disease":"Adrenogenital disorders",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere left hand",
                "checked":false
            },
            {
                "disease":"Hb-SS disease with splenic sequestration",
                "checked":false
            },
            {
                "disease":"Cataract secondary to ocular disorders (degenerative) (inflammatory) bilateral",
                "checked":false
            },
            {
                "disease":"Dissociative identity disorder",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease left shoulder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right main bronchus",
                "checked":false
            },
            {
                "disease":"Mitochondrial metabolism disorders",
                "checked":false
            },
            {
                "disease":"Underdosing of cardiac-stimulant glycosides and drugs of similar action",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor elbow",
                "checked":false
            },
            {
                "disease":"Encephalitis myelitis and encephalomyelitis in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Manic episode severe with psychotic symptoms",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic nephropathy",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left radius",
                "checked":false
            },
            {
                "disease":"Cardiovascular disorders originating in the perinatal period",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of right ankle and foot",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of lip",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease vertebrae",
                "checked":false
            },
            {
                "disease":"Crohn's disease of large intestine with fistula",
                "checked":false
            },
            {
                "disease":"Oropouche virus disease",
                "checked":false
            },
            {
                "disease":"Disorders of esophagus in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule left hand",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left conjunctiva",
                "checked":false
            },
            {
                "disease":"Pulmonary collapse",
                "checked":false
            },
            {
                "disease":"Facial nerve disorders",
                "checked":false
            },
            {
                "disease":"Vascular myelopathies",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease right hip",
                "checked":false
            },
            {
                "disease":"Injury of adrenal gland",
                "checked":false
            },
            {
                "disease":"Complications and ill-defined descriptions of heart disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of right shoulder",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease right forearm",
                "checked":false
            },
            {
                "disease":"Acute myeloid leukemia with 11q23-abnormality in remission",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) vascular disorders left side",
                "checked":false
            },
            {
                "disease":"disease of the circulatory system complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left optic nerve",
                "checked":false
            },
            {
                "disease":"Vascular anomalies of right upper eyelid",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment right knee",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of brain and central nervous system",
                "checked":false
            },
            {
                "disease":"Hypertensive heart and chronic kidney disease without heart failure",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 1 in pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of oropharynx",
                "checked":false
            },
            {
                "disease":"Rheumatic disorders of both mitral and tricuspid valves",
                "checked":false
            },
            {
                "disease":"Undifferentiated somatoform disorder",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis left ankle and foot",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of medulla of left adrenal gland",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) inflammatory disorders",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of floor of mouth",
                "checked":false
            },
            {
                "disease":"Localized vascularization of cornea bilateral",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of esophagus",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) inflammatory disorders right side",
                "checked":false
            },
            {
                "disease":"Disorders of olfactory nerve",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis right ankle and foot",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of middle ear and respiratory system",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of upper gum",
                "checked":false
            },
            {
                "disease":"Chorioretinal disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor left shoulder",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis left hip",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule right elbow",
                "checked":false
            },
            {
                "disease":"Disorder of ligament left wrist",
                "checked":false
            },
            {
                "disease":"Acute inflammatory disease of uterus",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis right hand",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment right hand",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment",
                "checked":false
            },
            {
                "disease":"Subacute combined degeneration of spinal cord in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of right knee",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of left wrist",
                "checked":false
            },
            {
                "disease":"Secondary hyperparathyroidism of renal origin",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of round ligament",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of cervix",
                "checked":false
            },
            {
                "disease":"Child psychological abuse confirmed",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pyriform sinus",
                "checked":false
            },
            {
                "disease":"Chronic pulmonary insufficiency following surgery",
                "checked":false
            },
            {
                "disease":"Endocrine nutritional and metabolic disease complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Fluency disorder in conditions classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of lower jaw bone",
                "checked":false
            },
            {
                "disease":"Central auditory processing disorder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of anterior wall of nasopharynx",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere hand",
                "checked":false
            },
            {
                "disease":"Deformity of orbit due to bone disease",
                "checked":false
            },
            {
                "disease":"Recurrent and persistent hematuria with dense deposit disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of left ankle and foot",
                "checked":false
            },
            {
                "disease":"Cervical disc disorder with radiculopathy cervicothoracic region",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of left ankle and foot",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of skin",
                "checked":false
            },
            {
                "disease":"Klebsiella pneumoniae [K. pneumoniae] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Chronic pulmonary blastomycosis",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with diabetic arthropathy",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere forearm",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of left hip",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right lacrimal gland and duct",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere left shoulder",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule wrist",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left spermatic cord",
                "checked":false
            },
            {
                "disease":"Disorders of accommodation",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of ovary",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor ankle and foot",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of shoulder",
                "checked":false
            },
            {
                "disease":"Disorders of endocrine glands in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Pulmonary complications of anesthesia during pregnancy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of larynx",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease left shoulder",
                "checked":false
            },
            {
                "disease":"Cardiac failure due to anesthesia during pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Erythema infectiosum [fifth disease]",
                "checked":false
            },
            {
                "disease":"Pulmonary candidiasis",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment hand",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left cornea",
                "checked":false
            },
            {
                "disease":"Anemia due to enzyme disorders",
                "checked":false
            },
            {
                "disease":"Intraoperative cardiac functional disturbances",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of renal artery",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of parietal lobe",
                "checked":false
            },
            {
                "disease":"Encounter for follow-up examination after completed treatment for malignant neoplasm",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cloacogenic zone",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of sigmoid colon",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode manic without psychotic features moderate",
                "checked":false
            },
            {
                "disease":"Renal and perinephric abscess",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease hand",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left round ligament",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of fundus uteri",
                "checked":false
            },
            {
                "disease":"Sickle-cell/Hb-C disease with splenic sequestration",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of hip",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left ciliary body",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode depressed mild or moderate severity",
                "checked":false
            },
            {
                "disease":"Mood disorder due to known physiological condition",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of multiple sites",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere right upper arm",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left hand",
                "checked":false
            },
            {
                "disease":"Reiter's disease hand",
                "checked":false
            },
            {
                "disease":"Disorders of glycosaminoglycan metabolism",
                "checked":false
            },
            {
                "disease":"Crohn's disease of large intestine with complications",
                "checked":false
            },
            {
                "disease":"Deformity of right orbit due to bone disease",
                "checked":false
            },
            {
                "disease":"Cardiomyopathy in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere right lower leg",
                "checked":false
            },
            {
                "disease":"Lambert-Eaton syndrome in neoplastic disease",
                "checked":false
            },
            {
                "disease":"Cardiac failure due to anesthesia during pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"disease of the circulatory system complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere thigh",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of urachus",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of kidney except renal pelvis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lower lobe right bronchus or lung",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left fallopian tube",
                "checked":false
            },
            {
                "disease":"Attention-deficit hyperactivity disorder predominantly hyperactive type",
                "checked":false
            },
            {
                "disease":"Chronic bullous disease of childhood",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of endometrium",
                "checked":false
            },
            {
                "disease":"Chronic motor or vocal tic disorder",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of scapula and long bones of left upper limb",
                "checked":false
            },
            {
                "disease":"Acute drug-induced interstitial lung disorders",
                "checked":false
            },
            {
                "disease":"Adult psychological abuse confirmed",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic autonomic (poly)neuropathy",
                "checked":false
            },
            {
                "disease":"Post-traumatic stress disorder (PTSD)",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of vulva",
                "checked":false
            },
            {
                "disease":"Congenital malformations of cardiac chambers and connections",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of mesothelial tissue of peritoneum",
                "checked":false
            },
            {
                "disease":"Mixed disorder of acid-base balance",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease right upper arm",
                "checked":false
            },
            {
                "disease":"Poisoning by phenothiazine antipsychotics and neuroleptics intentional self-harm",
                "checked":false
            },
            {
                "disease":"Proteus (mirabilis) (morganii) as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lateral wall of bladder",
                "checked":false
            },
            {
                "disease":"Chronic myeloid leukemia BCR/ABL-positive",
                "checked":false
            },
            {
                "disease":"Secondary sideroblastic anemia due to disease",
                "checked":false
            },
            {
                "disease":"Hirschsprung's disease",
                "checked":false
            },
            {
                "disease":"Anxiety disorder due to known physiological condition",
                "checked":false
            },
            {
                "disease":"Prolymphocytic leukemia of B-cell type in relapse",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of colon",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right choroid",
                "checked":false
            },
            {
                "disease":"Reiter's disease right shoulder",
                "checked":false
            },
            {
                "disease":"Adenovirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with hypoglycemia with coma",
                "checked":false
            },
            {
                "disease":"Cardiac arrest due to anesthesia during pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Vertiginous syndromes in disease classified elsewhere bilateral",
                "checked":false
            },
            {
                "disease":"Disorders of branched-chain amino-acid metabolism and fatty-acid metabolism",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of left wrist",
                "checked":false
            },
            {
                "disease":"Influenza due to unidentified influenza virus with pneumonia",
                "checked":false
            },
            {
                "disease":"Pregnancy related renal disease first trimester",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment left hip",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of liver and intrahepatic bile ducts",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere thigh",
                "checked":false
            },
            {
                "disease":"Crohn's disease of both small and large intestine with complications",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ampulla of Vater",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left main bronchus",
                "checked":false
            },
            {
                "disease":"Major depressive disorder recurrent in full remission",
                "checked":false
            },
            {
                "disease":"Encounter for nonprocreative screening for genetic disease carrier status",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of right ankle and foot",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with kidney complications",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of posterior wall of oropharynx",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of renal pelvis",
                "checked":false
            },
            {
                "disease":"Hb-SS disease with acute chest syndrome",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of mandible",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right acoustic nerve",
                "checked":false
            },
            {
                "disease":"Major depressive disorder recurrent in partial remission",
                "checked":false
            },
            {
                "disease":"Intervertebral disc disorders with radiculopathy thoracolumbar region",
                "checked":false
            },
            {
                "disease":"Partial anomalous pulmonary venous connection",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of hip",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode mixed moderate",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of left knee",
                "checked":false
            },
            {
                "disease":"Mood disorder due to known physiological condition with mixed features",
                "checked":false
            },
            {
                "disease":"Hydrocephalus in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Conversion disorder with motor symptom or deficit",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) vascular disorders right side of brain",
                "checked":false
            },
            {
                "disease":"Cocaine related disorders",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of intra-abdominal organs",
                "checked":false
            },
            {
                "disease":"Aneurysm of pulmonary artery",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of left lower limb including hip",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic peripheral angiopathy with gangrene",
                "checked":false
            },
            {
                "disease":"Neonatal cardiac dysrhythmia",
                "checked":false
            },
            {
                "disease":"Disorders of mineral metabolism",
                "checked":false
            },
            {
                "disease":"Embolism and thrombosis of renal vein",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis hip",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of right hip",
                "checked":false
            },
            {
                "disease":"Influenza due to unidentified influenza virus with otitis media",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of urinary organs",
                "checked":false
            },
            {
                "disease":"Brachial plexus disorders",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with diabetic cataract",
                "checked":false
            },
            {
                "disease":"Tic disorder",
                "checked":false
            },
            {
                "disease":"Pompe disease",
                "checked":false
            },
            {
                "disease":"Soft tissue disorders related to use overuse and pressure",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere left shoulder",
                "checked":false
            },
            {
                "disease":"Cervical disc disorder with myelopathy cervicothoracic region",
                "checked":false
            },
            {
                "disease":"Niemann-Pick disease",
                "checked":false
            },
            {
                "disease":"Encephalitis and encephalomyelitis in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of eye and adnexa",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode mixed severe without psychotic features",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease right hip",
                "checked":false
            },
            {
                "disease":"Chronic disease of tonsils and adenoids",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left fibula",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of scrotum",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease ankle and foot",
                "checked":false
            },
            {
                "disease":"Circadian rhythm sleep disorder delayed sleep phase type",
                "checked":false
            },
            {
                "disease":"Disorder of ligament left foot",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of duodenum",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment left ankle and foot",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis right hip",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of abdomen",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus",
                "checked":false
            },
            {
                "disease":"Congenital pulmonary arteriovenous malformation",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with mild nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Hemorrhagic disease of newborn",
                "checked":false
            },
            {
                "disease":"Vascular dementia with behavioral disturbance",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left ovary",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor right knee",
                "checked":false
            },
            {
                "disease":"Crohn's disease of both small and large intestine without complications",
                "checked":false
            },
            {
                "disease":"Gastro-esophageal reflux disease without esophagitis",
                "checked":false
            },
            {
                "disease":"Adhesive middle ear disease",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) neoplasm left side of brain",
                "checked":false
            },
            {
                "disease":"Hypoactive sexual desire disorder",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease right knee",
                "checked":false
            },
            {
                "disease":"Marfan's syndrome with cardiovascular manifestations",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of colon",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of multiple sites",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of shoulder",
                "checked":false
            },
            {
                "disease":"Acute nephritic syndrome with dense deposit disease",
                "checked":false
            },
            {
                "disease":"Pulmonary nocardiosis",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of right knee",
                "checked":false
            },
            {
                "disease":"Parainfluenza virus pneumonia",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of maxillary sinus",
                "checked":false
            },
            {
                "disease":"Presence of cardiac pacemaker",
                "checked":false
            },
            {
                "disease":"Pericarditis in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Disorders of multiple cranial nerves",
                "checked":false
            },
            {
                "disease":"Acute promyelocytic leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"End stage renal disease",
                "checked":false
            },
            {
                "disease":"Anemia due to disorders of nucleotide metabolism",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of larynx",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease left knee",
                "checked":false
            },
            {
                "disease":"Encounter for screening for nutritional disorder",
                "checked":false
            },
            {
                "disease":"Psychophysiologic insomnia",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of stomach",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right kidney except renal pelvis",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of right shoulder",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of kidney",
                "checked":false
            },
            {
                "disease":"Lambert-Eaton syndrome in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Cystic fibrosis with pulmonary manifestations",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left retina",
                "checked":false
            },
            {
                "disease":"Reiter's disease",
                "checked":false
            },
            {
                "disease":"Acoustic neuritis in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Myelodysplastic disease not classified",
                "checked":false
            },
            {
                "disease":"Mastoiditis in infectious and parasitic disease classified elsewhere right ear",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of biliary tract",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of larynx",
                "checked":false
            },
            {
                "disease":"Exanthema subitum [sixth disease]",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of ciliary body",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of elbow",
                "checked":false
            },
            {
                "disease":"Acute cerebrovascular insufficiency",
                "checked":false
            },
            {
                "disease":"Cocaine abuse with cocaine-induced anxiety disorder",
                "checked":false
            },
            {
                "disease":"Acute monoblastic/monocytic leukemia in remission",
                "checked":false
            },
            {
                "disease":"Hallucinogen abuse with hallucinogen persisting perception disorder (flashbacks)",
                "checked":false
            },
            {
                "disease":"Cori disease",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with hyperglycemia",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lower lobe bronchus or lung",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right foot",
                "checked":false
            },
            {
                "disease":"Laceration of adrenal gland",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease right lower leg",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic nephropathy",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic mononeuropathy",
                "checked":false
            },
            {
                "disease":"Chronic kidney disease stage 5",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Idiopathic pulmonary hemosiderosis",
                "checked":false
            },
            {
                "disease":"Encounter for screening for certain developmental disorders in childhood",
                "checked":false
            },
            {
                "disease":"Schizoaffective disorders",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of hypopharynx",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule left wrist",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of accessory sinuses",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease right elbow",
                "checked":false
            },
            {
                "disease":"Arteriovenous fistula of pulmonary vessels",
                "checked":false
            },
            {
                "disease":"Azoospermia due to systemic disease",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) neoplasm left side",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of skin and subcutaneous tissue of right arm",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor left ankle and foot",
                "checked":false
            },
            {
                "disease":"Meningoencephalitis in Chagas' disease",
                "checked":false
            },
            {
                "disease":"Reiter's disease wrist",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of meninges",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of genital organs",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of hand",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis left wrist",
                "checked":false
            },
            {
                "disease":"disease of Bartholin's gland",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with foot ulcer",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of nasal cavity and middle ear",
                "checked":false
            },
            {
                "disease":"Immunization not carried out due to patient having had the disease",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with proliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Pain disorder exclusively related to psychological factors",
                "checked":false
            },
            {
                "disease":"Crohn's disease of both small and large intestine with intestinal obstruction",
                "checked":false
            },
            {
                "disease":"Intervertebral disc disorders with radiculopathy thoracic region",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor right hip",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with hyperosmolarity with coma",
                "checked":false
            },
            {
                "disease":"Dermato(poly)myositis in neoplastic disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of bladder",
                "checked":false
            },
            {
                "disease":"Acute pulmonary insufficiency following thoracic surgery",
                "checked":false
            },
            {
                "disease":"Meningitis in Chagas' disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of knee",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease",
                "checked":false
            },
            {
                "disease":"Chronic inflammatory disorders of orbit",
                "checked":false
            },
            {
                "disease":"Bipolar II disorder",
                "checked":false
            },
            {
                "disease":"Intraoperative cerebrovascular infarction",
                "checked":false
            },
            {
                "disease":"Problems related to certain psychosocial circumstances",
                "checked":false
            },
            {
                "disease":"Mature B-cell leukemia Burkitt-type in relapse",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of endocrine glands",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left testis",
                "checked":false
            },
            {
                "disease":"Alzheimer's disease with early onset",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pyloric antrum",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere right thigh",
                "checked":false
            },
            {
                "disease":"Disseminated intravascular coagulation [defibrination syndrome]",
                "checked":false
            },
            {
                "disease":"Neonatal adrenal hemorrhage",
                "checked":false
            },
            {
                "disease":"disease of the nervous system complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere right ankle and foot",
                "checked":false
            },
            {
                "disease":"Legionnaires' disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of right elbow",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of bone marrow",
                "checked":false
            },
            {
                "disease":"Vascular headache not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of bone and articular cartilage",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of short bones of left lower limb",
                "checked":false
            },
            {
                "disease":"Hepatic veno-occlusive disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of right hand",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of left shoulder",
                "checked":false
            },
            {
                "disease":"Vascular abnormalities of conjunctiva right eye",
                "checked":false
            },
            {
                "disease":"Enterovirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Corneal neovascularization",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere hand",
                "checked":false
            },
            {
                "disease":"Liver and biliary tract disorders in childbirth",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment left wrist",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right conjunctiva",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of left hip",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment right hip",
                "checked":false
            },
            {
                "disease":"Hypertensive heart and chronic kidney disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule vertebrae",
                "checked":false
            },
            {
                "disease":"Reiter's disease right elbow",
                "checked":false
            },
            {
                "disease":"Bipolar disorder currently in remission",
                "checked":false
            },
            {
                "disease":"Calculus of urinary tract in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Influenza due to certain identified influenza viruses",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of main bronchus",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease multiple sites",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of wrist",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 2 in pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere right hand",
                "checked":false
            },
            {
                "disease":"Reiter's disease left hip",
                "checked":false
            },
            {
                "disease":"Exanthema subitum [sixth disease] due to human herpesvirus 6",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with hepatic necrosis without coma",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor shoulder",
                "checked":false
            },
            {
                "disease":"Persistent mood [affective] disorders",
                "checked":false
            },
            {
                "disease":"Disorders of copper metabolism",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of right testis",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with hypoglycemia without coma",
                "checked":false
            },
            {
                "disease":"Cardiac arrest due to anesthesia during pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"disease of thymus",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cortex of right adrenal gland",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis ankle and foot",
                "checked":false
            },
            {
                "disease":"Encounter for screening for infectious and parasitic disease",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in childbirth insulin controlled",
                "checked":false
            },
            {
                "disease":"Kyphoscoliotic heart disease",
                "checked":false
            },
            {
                "disease":"Hartnup's disease",
                "checked":false
            },
            {
                "disease":"Meningococcal heart disease",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of eye and adnexa",
                "checked":false
            },
            {
                "disease":"Mechanical complication of vascular dialysis catheter",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of ribs sternum and clavicle",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right optic nerve",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart and chronic kidney disease complicating childbirth",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lingual tonsil",
                "checked":false
            },
            {
                "disease":"Disorders of acoustic nerve",
                "checked":false
            },
            {
                "disease":"Vascular anomalies of left lower eyelid",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of left lung",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with ketoacidosis",
                "checked":false
            },
            {
                "disease":"Adhesive right middle ear disease",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 1 in pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Sickle-cell/Hb-C disease with crisis",
                "checked":false
            },
            {
                "disease":"Encounter for screening for disorder due to exposure to contaminants",
                "checked":false
            },
            {
                "disease":"Intervertebral disc disorders with myelopathy thoracolumbar region",
                "checked":false
            },
            {
                "disease":"Disorder of patella",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus",
                "checked":false
            },
            {
                "disease":"Underdosing of coronary vasodilators",
                "checked":false
            },
            {
                "disease":"Gaucher disease",
                "checked":false
            },
            {
                "disease":"Acute bronchitis due to Hemophilus influenzae",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease wrist",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm",
                "checked":false
            },
            {
                "disease":"Chronic myeloid leukemia BCR/ABL-positive not having achieved remission",
                "checked":false
            },
            {
                "disease":"Cataract with neovascularization left eye",
                "checked":false
            },
            {
                "disease":"Disorders of ornithine metabolism",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of rectosigmoid junction",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of right ureter",
                "checked":false
            },
            {
                "disease":"Intervertebral disc disorders with myelopathy lumbar region",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of branchial cleft",
                "checked":false
            },
            {
                "disease":"Adjustment disorder with disturbance of conduct",
                "checked":false
            },
            {
                "disease":"Major depressive disorder recurrent",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere shoulder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of lower limb including hip",
                "checked":false
            },
            {
                "disease":"Sickle-cell/Hb-C disease with acute chest syndrome",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 2 in pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Sézary disease extranodal and solid organ sites",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of transverse colon",
                "checked":false
            },
            {
                "disease":"disease of the respiratory system complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease left ankle and foot",
                "checked":false
            },
            {
                "disease":"Catatonic disorder due to known physiological condition",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of ovary",
                "checked":false
            },
            {
                "disease":"Otitis media in disease classified elsewhere left ear",
                "checked":false
            },
            {
                "disease":"Transitory neonatal disorders of calcium and magnesium metabolism",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lower third of esophagus",
                "checked":false
            },
            {
                "disease":"Localized vascularization of cornea right eye",
                "checked":false
            },
            {
                "disease":"Cervical disc disorder with radiculopathy mid-cervical region",
                "checked":false
            },
            {
                "disease":"Renal failure following failed attempted termination of pregnancy",
                "checked":false
            },
            {
                "disease":"Cataract with neovascularization",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ill-defined sites within the digestive system",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of isthmus uteri",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of colon",
                "checked":false
            },
            {
                "disease":"Congenital pulmonary valve stenosis",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left ureter",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of trachea bronchus and lung",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with oral complications",
                "checked":false
            },
            {
                "disease":"Adult T-cell lymphoma/leukemia (HTLV-1-associated) in remission",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lower gum",
                "checked":false
            },
            {
                "disease":"Coarctation of pulmonary artery",
                "checked":false
            },
            {
                "disease":"Chronic pulmonary coccidioidomycosis",
                "checked":false
            },
            {
                "disease":"Dissociative and conversion disorders",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment right hand",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere forearm",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of external upper lip",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of left wrist",
                "checked":false
            },
            {
                "disease":"disease of the circulatory system complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with kidney complications",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease right shoulder",
                "checked":false
            },
            {
                "disease":"Disorders of fatty-acid oxidation",
                "checked":false
            },
            {
                "disease":"Acute lymphoblastic leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Kienböck's disease of adults",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of short bones of lower limb",
                "checked":false
            },
            {
                "disease":"Congenital vesico-uretero-renal reflux",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of right wrist",
                "checked":false
            },
            {
                "disease":"Vascular anomalies of right lower eyelid",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of esophagus",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of urethra",
                "checked":false
            },
            {
                "disease":"Encounter for adjustment and management of cardiac device",
                "checked":false
            },
            {
                "disease":"Pulmonary tularemia",
                "checked":false
            },
            {
                "disease":"Lumbosacral plexus disorders",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right broad ligament",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left ciliary body",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of head of pancreas",
                "checked":false
            },
            {
                "disease":"Krabbe disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of spermatic cord",
                "checked":false
            },
            {
                "disease":"Disorder of ligament right hand",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of tonsil",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right hand",
                "checked":false
            },
            {
                "disease":"Vascular abnormalities of conjunctiva bilateral",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease left knee",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of right elbow",
                "checked":false
            },
            {
                "disease":"Vascular dementia without behavioral disturbance",
                "checked":false
            },
            {
                "disease":"Chronic pulmonary embolism",
                "checked":false
            },
            {
                "disease":"Cannabis abuse with psychotic disorder with delusions",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease left upper arm",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of hip",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule right wrist",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of trachea",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode depressed severe with psychotic features",
                "checked":false
            },
            {
                "disease":"disease of the respiratory system complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Opioid abuse with opioid-induced sleep disorder",
                "checked":false
            },
            {
                "disease":"Genetic susceptibility to malignant neoplasm",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of right upper limb including shoulder",
                "checked":false
            },
            {
                "disease":"Vascular abnormalities of conjunctiva left eye",
                "checked":false
            },
            {
                "disease":"Disorder of ligament left ankle",
                "checked":false
            },
            {
                "disease":"Adult T-cell lymphoma/leukemia (HTLV-1-associated)",
                "checked":false
            },
            {
                "disease":"Inhalant abuse with inhalant-induced psychotic disorder",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of peripheral nerves and autonomic nervous system",
                "checked":false
            },
            {
                "disease":"Oncovirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Primary disorders of muscles",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic arthropathy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of carotid body",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of right wrist",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 2 in pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule knee",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right ureter",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of left elbow",
                "checked":false
            },
            {
                "disease":"Abuse of non-psychoactive substances",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease right shoulder",
                "checked":false
            },
            {
                "disease":"Lymphoid leukemia",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of ankle and foot",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of tongue",
                "checked":false
            },
            {
                "disease":"disease of the circulatory system complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of scapula and long bones of left upper limb",
                "checked":false
            },
            {
                "disease":"Disorders of propionate metabolism",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere lower leg",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive chronic kidney disease complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Inhalant abuse with inhalant-induced psychotic disorder with delusions",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of right hand",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule right hip",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of kidney",
                "checked":false
            },
            {
                "disease":"Myopathy in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of long bones of lower limb",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of abdomen",
                "checked":false
            },
            {
                "disease":"Breakdown (mechanical) of vascular dialysis catheter",
                "checked":false
            },
            {
                "disease":"Manic episode without psychotic symptoms mild",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of left lower limb including hip",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of left knee",
                "checked":false
            },
            {
                "disease":"Reiter's disease right ankle and foot",
                "checked":false
            },
            {
                "disease":"Disorder of ligament ankle and foot",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor right elbow",
                "checked":false
            },
            {
                "disease":"Reiter's disease left hand",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere right upper arm",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of retromolar area",
                "checked":false
            },
            {
                "disease":"Conduct disorders",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere thoracolumbar region",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with proliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease shoulder",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of bladder",
                "checked":false
            },
            {
                "disease":"Vascular dementia",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere ankle and foot",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cortex of adrenal gland",
                "checked":false
            },
            {
                "disease":"Pulmonary infundibular stenosis",
                "checked":false
            },
            {
                "disease":"Influenza due to identified novel influenza A virus",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of thymus",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart disease complicating childbirth",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of left shoulder",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with moderate nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of pelvis",
                "checked":false
            },
            {
                "disease":"Sézary disease intrapelvic lymph nodes",
                "checked":false
            },
            {
                "disease":"Acute myeloblastic leukemia in remission",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of sigmoid colon",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) inflammatory disorders left side of brain",
                "checked":false
            },
            {
                "disease":"disease of the circulatory system complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Carrier of bacterial disease due to meningococci",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of right lung",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor left wrist",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of small intestine",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis right shoulder",
                "checked":false
            },
            {
                "disease":"Postprocedural cerebrovascular infarction during cardiac surgery",
                "checked":false
            },
            {
                "disease":"Disorders of myoneural junction and muscle in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of bladder neck",
                "checked":false
            },
            {
                "disease":"Acute myeloid leukemia with multilineage dysplasia",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of small intestine",
                "checked":false
            },
            {
                "disease":"Crohn's disease of both small and large intestine with abscess",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of left elbow",
                "checked":false
            },
            {
                "disease":"Plasma cell leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Adjustment disorder with mixed disturbance of emotions and conduct",
                "checked":false
            },
            {
                "disease":"Cocaine abuse with cocaine-induced psychotic disorder",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease pelvis",
                "checked":false
            },
            {
                "disease":"Idiopathic pulmonary fibrosis",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with skin complications",
                "checked":false
            },
            {
                "disease":"Reiter's disease elbow",
                "checked":false
            },
            {
                "disease":"Inflammatory disorders of scrotum",
                "checked":false
            },
            {
                "disease":"Encounter for preprocedural cardiovascular examination",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with chronic persistent hepatitis",
                "checked":false
            },
            {
                "disease":"Psychotic disorder with hallucinations due to known physiological condition",
                "checked":false
            },
            {
                "disease":"Rapidly progressive nephritic syndrome with dense deposit disease",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with hepatic necrosis with coma",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere left thigh",
                "checked":false
            },
            {
                "disease":"Congenital malformations of pulmonary and tricuspid valves",
                "checked":false
            },
            {
                "disease":"Disorder of ligament right wrist",
                "checked":false
            },
            {
                "disease":"Adjustment disorder with anxiety",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of rectum anus and anal canal",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease forearm",
                "checked":false
            },
            {
                "disease":"Coronary artery dissection",
                "checked":false
            },
            {
                "disease":"Chagas' disease",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic cataract",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus [HIV] disease complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Hallucinogen abuse with hallucinogen-induced mood disorder",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of hypopharynx",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment right shoulder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pituitary gland",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of short bones of upper limb",
                "checked":false
            },
            {
                "disease":"Conduct disorder confined to family context",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of tongue",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere left lower leg",
                "checked":false
            },
            {
                "disease":"Antepartum hemorrhage with disseminated intravascular coagulation",
                "checked":false
            },
            {
                "disease":"Corneal deposits in metabolic disorders bilateral",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left renal pelvis",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of tongue",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of parathyroid gland",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode mixed mild",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of pleura",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere cervical region",
                "checked":false
            },
            {
                "disease":"Renal hypoplasia unilateral",
                "checked":false
            },
            {
                "disease":"Acute myeloid leukemia with 11q23-abnormality",
                "checked":false
            },
            {
                "disease":"Anemia in neoplastic disease",
                "checked":false
            },
            {
                "disease":"Disorders of peritoneum in infectious disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of lip oral cavity and pharynx",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of base of tongue",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of retroperitoneum",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment ankle and foot",
                "checked":false
            },
            {
                "disease":"Encounter for screening for upper gastrointestinal disorder",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere left forearm",
                "checked":false
            },
            {
                "disease":"Poisoning by phenothiazine antipsychotics and neuroleptics undetermined",
                "checked":false
            },
            {
                "disease":"Pregnancy related renal disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule left knee",
                "checked":false
            },
            {
                "disease":"Lyme disease",
                "checked":false
            },
            {
                "disease":"Autistic disorder",
                "checked":false
            },
            {
                "disease":"Fabry (-Anderson) disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left lacrimal gland and duct",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in the puerperium diet controlled",
                "checked":false
            },
            {
                "disease":"Renal failure following incomplete spontaneous abortion",
                "checked":false
            },
            {
                "disease":"Breakdown (mechanical) of coronary artery bypass graft",
                "checked":false
            },
            {
                "disease":"Coronary artery aneurysm and dissection",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart disease complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Retinal disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Onchocerciasis without eye disease",
                "checked":false
            },
            {
                "disease":"Articular disc disorder of temporomandibular joint",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of elbow",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere thigh",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of small intestine",
                "checked":false
            },
            {
                "disease":"Disorders of optic chiasm in (due to) neoplasm",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of testis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of anterior wall of bladder",
                "checked":false
            },
            {
                "disease":"Liver and biliary tract disorders in pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of pituitary gland",
                "checked":false
            },
            {
                "disease":"Postprocedural heart failure following cardiac surgery",
                "checked":false
            },
            {
                "disease":"Pulmonary interstitial glycogenosis",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of hand",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of adrenal gland",
                "checked":false
            },
            {
                "disease":"Respiratory disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"disease of the respiratory system complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Major depressive disorder single episode in partial remission",
                "checked":false
            },
            {
                "disease":"Mononeuropathy in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment multiple sites",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of middle ear and respiratory and intrathoracic organs",
                "checked":false
            },
            {
                "disease":"Spondylopathies in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ventral surface of tongue",
                "checked":false
            },
            {
                "disease":"Patellofemoral disorders",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of left hand",
                "checked":false
            },
            {
                "disease":"Disorder of ligament elbow",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere right shoulder",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis left hand",
                "checked":false
            },
            {
                "disease":"Anemia due to disorders of glycolytic enzymes",
                "checked":false
            },
            {
                "disease":"Bullous disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 1 in pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Mood disorder due to known physiological condition with manic features",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease right ankle and foot",
                "checked":false
            },
            {
                "disease":"Gender identity disorder in adolescence and adulthood",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic amyotrophy",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right cornea",
                "checked":false
            },
            {
                "disease":"Stenosis of pulmonary artery",
                "checked":false
            },
            {
                "disease":"Aluminum bone disease",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of esophagus",
                "checked":false
            },
            {
                "disease":"Protozoal disease complicating childbirth",
                "checked":false
            },
            {
                "disease":"disease of vocal cords and larynx not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of right hand",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere right lower leg",
                "checked":false
            },
            {
                "disease":"Ménière's disease bilateral",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of descended left testis",
                "checked":false
            },
            {
                "disease":"Poisoning by adverse effect of and underdosing of psychostimulants",
                "checked":false
            },
            {
                "disease":"Reiter's disease left elbow",
                "checked":false
            },
            {
                "disease":"Sepsis due to Hemophilus influenzae",
                "checked":false
            },
            {
                "disease":"Somatization disorder",
                "checked":false
            },
            {
                "disease":"Crohn's disease of small intestine with intestinal obstruction",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere occipito-atlanto-axial region",
                "checked":false
            },
            {
                "disease":"Reovirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Lumbosacral root disorders not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Disorders of glossopharyngeal nerve",
                "checked":false
            },
            {
                "disease":"REM sleep behavior disorder",
                "checked":false
            },
            {
                "disease":"Cataract with neovascularization right eye",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule right shoulder",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of colon",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of kidney and renal pelvis",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of bones of skull and face",
                "checked":false
            },
            {
                "disease":"Urethral functional and muscular disorders",
                "checked":false
            },
            {
                "disease":"Disorders of newborn related to long gestation and high birth weight",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right upper limb",
                "checked":false
            },
            {
                "disease":"Intraoperative cerebrovascular infarction during cardiac surgery",
                "checked":false
            },
            {
                "disease":"Cervical root disorders not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Muscular disorders of urethra",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with periodontal disease",
                "checked":false
            },
            {
                "disease":"Fluency disorder following cerebral infarction",
                "checked":false
            },
            {
                "disease":"Peripheral vascular angioplasty status with implants and grafts",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of skin",
                "checked":false
            },
            {
                "disease":"Oppositional defiant disorder",
                "checked":false
            },
            {
                "disease":"Disorders of hypoglossal nerve",
                "checked":false
            },
            {
                "disease":"disease of lips",
                "checked":false
            },
            {
                "disease":"Acute megakaryoblastic leukemia",
                "checked":false
            },
            {
                "disease":"Orgasmic disorder",
                "checked":false
            },
            {
                "disease":"Alcohol related disorders",
                "checked":false
            },
            {
                "disease":"Schizophreniform disorder",
                "checked":false
            },
            {
                "disease":"Atherosclerotic heart disease of native coronary artery",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of coronary artery bypass graft(s) without angina pectoris",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule right hand",
                "checked":false
            },
            {
                "disease":"Protozoal disease complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere multiple sites in spine",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of hypopharynx",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of conjunctiva",
                "checked":false
            },
            {
                "disease":"Changes in retinal vascular appearance left eye",
                "checked":false
            },
            {
                "disease":"Thoracic thoracolumbar and lumbosacral intervertebral disc disorders",
                "checked":false
            },
            {
                "disease":"Disorders of vagus nerve",
                "checked":false
            },
            {
                "disease":"Total anomalous pulmonary venous connection",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of ankle and foot",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of small intestine",
                "checked":false
            },
            {
                "disease":"Human metapneumovirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Niemann-Pick disease type C",
                "checked":false
            },
            {
                "disease":"Disorder of continuity of bone",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with chronic active hepatitis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of vallecula",
                "checked":false
            },
            {
                "disease":"Cervical disc disorder with radiculopathy",
                "checked":false
            },
            {
                "disease":"Nightmare disorder",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of multiple sites",
                "checked":false
            },
            {
                "disease":"Schizotypal disorder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of left upper limb including shoulder",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of right ankle and foot",
                "checked":false
            },
            {
                "disease":"Acute lymphoblastic leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Disorders of newborn related to slow fetal growth and fetal malnutrition",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left femur",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of upper lobe left bronchus or lung",
                "checked":false
            },
            {
                "disease":"Inhalant abuse with inhalant-induced dementia",
                "checked":false
            },
            {
                "disease":"Adult T-cell lymphoma/leukemia (HTLV-1-associated) not having achieved remission",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis wrist",
                "checked":false
            },
            {
                "disease":"Changes in retinal vascular appearance",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of brain supratentorial",
                "checked":false
            },
            {
                "disease":"Pulmonary embolism with acute cor pulmonale",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic polyneuropathy",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of left hip",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule hip",
                "checked":false
            },
            {
                "disease":"Congenital adrenogenital disorders associated with enzyme deficiency",
                "checked":false
            },
            {
                "disease":"Cataract in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of right lower limb including hip",
                "checked":false
            },
            {
                "disease":"Disorders of bile acid and cholesterol metabolism",
                "checked":false
            },
            {
                "disease":"Abnormal results of cardiovascular function studies",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of thymus",
                "checked":false
            },
            {
                "disease":"Major depressive disorder recurrent moderate",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of bronchus and lung",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with ketoacidosis with coma",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right renal pelvis",
                "checked":false
            },
            {
                "disease":"Hemorrhagic disorder due to circulating anticoagulants",
                "checked":false
            },
            {
                "disease":"Factitious disorder with predominantly psychological signs and symptoms",
                "checked":false
            },
            {
                "disease":"Breakdown (mechanical) of cardiac electrode",
                "checked":false
            },
            {
                "disease":"Conversion disorder with sensory symptom or deficit",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of right shoulder",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right choroid",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease right wrist",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of bones of skull and face",
                "checked":false
            },
            {
                "disease":"Crohn's disease of small intestine with abscess",
                "checked":false
            },
            {
                "disease":"Postprocedural cerebrovascular infarction",
                "checked":false
            },
            {
                "disease":"Leakage of vascular dialysis catheter",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode manic without psychotic features mild",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus",
                "checked":false
            },
            {
                "disease":"Conduct disorder adolescent-onset type",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with oral complications",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of external lower lip",
                "checked":false
            },
            {
                "disease":"Sickle-cell/Hb-C disease",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with diabetic nephropathy",
                "checked":false
            },
            {
                "disease":"Disorders of iron metabolism",
                "checked":false
            },
            {
                "disease":"Pulmonary hemorrhage originating in the perinatal period",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of cerebral meninges",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of right hip",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ascending colon",
                "checked":false
            },
            {
                "disease":"Transient tic disorder",
                "checked":false
            },
            {
                "disease":"Vascular complications following infusion transfusion and therapeutic injection",
                "checked":false
            },
            {
                "disease":"Toxic liver disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of wrist",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right femur",
                "checked":false
            },
            {
                "disease":"Localized vascularization of cornea left eye",
                "checked":false
            },
            {
                "disease":"Cataract secondary to ocular disorders (degenerative) (inflammatory) left eye",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis left shoulder",
                "checked":false
            },
            {
                "disease":"Panic disorder [episodic paroxysmal anxiety] without agoraphobia",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with chronic lobular hepatitis",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with skin complications",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of cerebral meninges",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with ophthalmic complications",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere right thigh",
                "checked":false
            },
            {
                "disease":"Manic episode without psychotic symptoms",
                "checked":false
            },
            {
                "disease":"Staphylococcus aureus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of spinal cord",
                "checked":false
            },
            {
                "disease":"Opioid abuse with opioid-induced psychotic disorder with delusions",
                "checked":false
            },
            {
                "disease":"Pulmonary cryptococcosis",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right ankle",
                "checked":false
            },
            {
                "disease":"Cardiac arrest",
                "checked":false
            },
            {
                "disease":"Cardiac arrest following an ectopic and molar pregnancy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of body of pancreas",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in childbirth",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere left ankle and foot",
                "checked":false
            },
            {
                "disease":"Acute erythroid leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Genetic susceptibility to disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor knee",
                "checked":false
            },
            {
                "disease":"disease of the digestive system complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Parkinson's disease",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right kidney",
                "checked":false
            },
            {
                "disease":"Gastro-esophageal reflux disease with esophagitis",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right ciliary body",
                "checked":false
            },
            {
                "disease":"Otitis media in disease classified elsewhere bilateral",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of colon rectum anus and anal canal",
                "checked":false
            },
            {
                "disease":"Psychological abuse complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Protozoal disease complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Pulmonary mucormycosis",
                "checked":false
            },
            {
                "disease":"Psychophysical visual disturbances",
                "checked":false
            },
            {
                "disease":"Factitious disorder",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic chronic kidney disease",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with hypoglycemia without coma",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of exocervix",
                "checked":false
            },
            {
                "disease":"Aneurysm of renal artery",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of uterus",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right cornea",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of middle ear nasal cavity and accessory sinuses",
                "checked":false
            },
            {
                "disease":"Encounter for screening for nervous system disorders",
                "checked":false
            },
            {
                "disease":"Chronic lymphocytic leukemia of B-cell type not having achieved remission",
                "checked":false
            },
            {
                "disease":"Antisocial personality disorder",
                "checked":false
            },
            {
                "disease":"Hypertensive heart disease without heart failure",
                "checked":false
            },
            {
                "disease":"disease of tongue",
                "checked":false
            },
            {
                "disease":"Noninflammatory disorders of ovary fallopian tube and broad ligament",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left choroid",
                "checked":false
            },
            {
                "disease":"Protozoal disease complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of upper limb including shoulder",
                "checked":false
            },
            {
                "disease":"Coronary atherosclerosis due to calcified coronary lesion",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of brain and cerebral meninges",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with hypoglycemia",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of right shoulder",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere right hand",
                "checked":false
            },
            {
                "disease":"Behçet's disease",
                "checked":false
            },
            {
                "disease":"Cranial nerve disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of dome of bladder",
                "checked":false
            },
            {
                "disease":"Acute myelomonocytic leukemia in remission",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of liver and intrahepatic bile duct",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with circulatory complications",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of cranial nerves",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode manic without psychotic features severe",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition without complications",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right epididymis",
                "checked":false
            },
            {
                "disease":"Cataract secondary to ocular disorders (degenerative) (inflammatory) right eye",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 2 in the puerperium",
                "checked":false
            },
            {
                "disease":"Renal dysplasia",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment wrist",
                "checked":false
            },
            {
                "disease":"Polyneuropathy in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Otitis media in disease classified elsewhere right ear",
                "checked":false
            },
            {
                "disease":"Pregnancy related renal disease third trimester",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment hip",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of hepatic flexure",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of superior wall of nasopharynx",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of wrist",
                "checked":false
            },
            {
                "disease":"Cardiac failure due to anesthesia during pregnancy",
                "checked":false
            },
            {
                "disease":"Septic pulmonary embolism without acute cor pulmonale",
                "checked":false
            },
            {
                "disease":"Phonological disorder",
                "checked":false
            },
            {
                "disease":"Reiter's disease right hip",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cerebral meninges",
                "checked":false
            },
            {
                "disease":"Hereditary nephropathy not elsewhere classified with dense deposit disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of oropharynx",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of vulva",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left cornea",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of corpus uteri",
                "checked":false
            },
            {
                "disease":"Circadian rhythm sleep disorder in conditions classified elsewhere",
                "checked":false
            },
            {
                "disease":"Acute erythroid leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with hypoglycemia with coma",
                "checked":false
            },
            {
                "disease":"Pervasive developmental disorders",
                "checked":false
            },
            {
                "disease":"Disorders of ketone metabolism",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic cataract",
                "checked":false
            },
            {
                "disease":"Presence of automatic (implantable) cardiac defibrillator",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of rectosigmoid junction",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of tonsil",
                "checked":false
            },
            {
                "disease":"Reiter's disease right hand",
                "checked":false
            },
            {
                "disease":"Acute pulmonary manifestations due to radiation",
                "checked":false
            },
            {
                "disease":"Congenital single renal cyst",
                "checked":false
            },
            {
                "disease":"Dysthymic disorder",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with chronic active hepatitis with ascites",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of broad ligament",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of oral cavity and digestive organs",
                "checked":false
            },
            {
                "disease":"Acute promyelocytic leukemia",
                "checked":false
            },
            {
                "disease":"Hallucinogen abuse with hallucinogen-induced psychotic disorder with delusions",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment right ankle and foot",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with periodontal disease",
                "checked":false
            },
            {
                "disease":"Invasive pulmonary aspergillosis",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of ovary",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with hyperosmolarity",
                "checked":false
            },
            {
                "disease":"disease of the digestive system complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Pulmonary edema",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor right wrist",
                "checked":false
            },
            {
                "disease":"Hallervorden-Spatz disease",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment knee",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus in pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of gallbladder",
                "checked":false
            },
            {
                "disease":"Voice and resonance disorders",
                "checked":false
            },
            {
                "disease":"Aneurysm of aorta in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Motor neuron disease",
                "checked":false
            },
            {
                "disease":"Pick's disease",
                "checked":false
            },
            {
                "disease":"Crohn's disease of small intestine with rectal bleeding",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of trigone of bladder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of descended testis",
                "checked":false
            },
            {
                "disease":"Disorders of prepuce",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis left knee",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule ankle and foot",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease left thigh",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of connective and soft tissue",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor right ankle and foot",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease left forearm",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of short bones of left upper limb",
                "checked":false
            },
            {
                "disease":"Renal hypoplasia bilateral",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic dermatitis",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere sacral and sacrococcygeal region",
                "checked":false
            },
            {
                "disease":"Reactive attachment disorder of childhood",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis right wrist",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right retina",
                "checked":false
            },
            {
                "disease":"Orf virus disease",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with circulatory complications",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of left hand",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of body of stomach",
                "checked":false
            },
            {
                "disease":"Disorder of written expression",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode depressed severe without psychotic features",
                "checked":false
            },
            {
                "disease":"Disorder of ligament right shoulder",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease left wrist",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of undescended testis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of tonsil",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with neurological complications",
                "checked":false
            },
            {
                "disease":"Hypertensive chronic kidney disease",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with circulatory complications",
                "checked":false
            },
            {
                "disease":"Wandering in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Minor laceration of pulmonary blood vessels",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with hypoglycemia without coma",
                "checked":false
            },
            {
                "disease":"Breakdown (mechanical) of cardiac pulse generator (battery)",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease elbow",
                "checked":false
            },
            {
                "disease":"Encounter for general psychiatric examination requested by authority",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of thyroid gland",
                "checked":false
            },
            {
                "disease":"Chronic ischemic heart disease",
                "checked":false
            },
            {
                "disease":"Reiter's disease left ankle and foot",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of right renal pelvis",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of brain infratentorial",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of palate",
                "checked":false
            },
            {
                "disease":"Major laceration of right pulmonary blood vessels",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment hip",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with severe nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Cardiac arrest following incomplete spontaneous abortion",
                "checked":false
            },
            {
                "disease":"Inflammatory disorders of seminal vesicle",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of floor of mouth",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm associated with transplanted organ",
                "checked":false
            },
            {
                "disease":"Disorders of carnitine metabolism",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of spermatic cord",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of right hip",
                "checked":false
            },
            {
                "disease":"Urethral disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease hip",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of right ovary",
                "checked":false
            },
            {
                "disease":"Keratoderma in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with foot ulcer",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere left hand",
                "checked":false
            },
            {
                "disease":"Atherosclerotic heart disease of native coronary artery with angina pectoris",
                "checked":false
            },
            {
                "disease":"Atypical chronic myeloid leukemia BCR/ABL-negative not having achieved remission",
                "checked":false
            },
            {
                "disease":"Hemorrhagic fever with renal syndrome",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of left shoulder",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis hand",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of head face and neck",
                "checked":false
            },
            {
                "disease":"Disorders of sulfur-bearing amino-acid metabolism",
                "checked":false
            },
            {
                "disease":"Streptococcus pneumoniae as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Pulmonary actinomycosis",
                "checked":false
            },
            {
                "disease":"Liver and biliary tract disorders in pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Harada's disease",
                "checked":false
            },
            {
                "disease":"Hookworm disease",
                "checked":false
            },
            {
                "disease":"Acute vascular disorders of intestine",
                "checked":false
            },
            {
                "disease":"Attention-deficit hyperactivity disorder combined type",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of appendix",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of right adrenal gland",
                "checked":false
            },
            {
                "disease":"Reiter's disease left wrist",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with foot ulcer",
                "checked":false
            },
            {
                "disease":"Crohn's disease of small intestine",
                "checked":false
            },
            {
                "disease":"Crohn's disease of small intestine with fistula",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with kidney complications",
                "checked":false
            },
            {
                "disease":"Niemann-Pick disease type A",
                "checked":false
            },
            {
                "disease":"Mood disorder due to known physiological condition with depressive features",
                "checked":false
            },
            {
                "disease":"Coronary artery aneurysm",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of anus and anal canal",
                "checked":false
            },
            {
                "disease":"Prolymphocytic leukemia of B-cell type not having achieved remission",
                "checked":false
            },
            {
                "disease":"Sickle-cell disease without crisis",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere thoracic region",
                "checked":false
            },
            {
                "disease":"Pulmonary mycobacterial infection",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with hyperglycemia",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with ophthalmic complications",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of spinal meninges",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of pineal gland",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease left hand",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere left shoulder",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Cystic disease of liver",
                "checked":false
            },
            {
                "disease":"Disorders of optic chiasm in (due to) vascular disorders",
                "checked":false
            },
            {
                "disease":"Crohn's disease of large intestine without complications",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere left thigh",
                "checked":false
            },
            {
                "disease":"Cataract secondary to ocular disorders (degenerative) (inflammatory)",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of peritoneum",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left ulna",
                "checked":false
            },
            {
                "disease":"Rocio virus disease",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment vertebrae",
                "checked":false
            },
            {
                "disease":"Nonrheumatic pulmonary valve disorders",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule right ankle and foot",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease hand",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of renal pelvis",
                "checked":false
            },
            {
                "disease":"Retrovirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Disorders of globe",
                "checked":false
            },
            {
                "disease":"Adult onset fluency disorder",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of left ankle and foot",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease right wrist",
                "checked":false
            },
            {
                "disease":"Benign and innocent cardiac murmurs",
                "checked":false
            },
            {
                "disease":"Endocrine nutritional and metabolic disease complicating childbirth",
                "checked":false
            },
            {
                "disease":"Reiter's disease right wrist",
                "checked":false
            },
            {
                "disease":"Streptococcus group A as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of knee",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere right thigh",
                "checked":false
            },
            {
                "disease":"disease of the digestive system complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Combined rheumatic disorders of mitral aortic and tricuspid valves",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease ankle and foot",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pelvic bones sacrum and coccyx",
                "checked":false
            },
            {
                "disease":"Complete loss of teeth due to periodontal disease class II",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right humerus",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of nervous system",
                "checked":false
            },
            {
                "disease":"Acute pulmonary edema",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic amyotrophy",
                "checked":false
            },
            {
                "disease":"Primary pulmonary hypertension",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of bone and articular cartilage",
                "checked":false
            },
            {
                "disease":"Septic pulmonary embolism with acute cor pulmonale",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) vascular disorders left side of brain",
                "checked":false
            },
            {
                "disease":"Inhalant abuse with inhalant-induced anxiety disorder",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment right hip",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of posterior wall of hypopharynx",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ovary",
                "checked":false
            },
            {
                "disease":"Yaba pox virus disease",
                "checked":false
            },
            {
                "disease":"Cystic kidney disease",
                "checked":false
            },
            {
                "disease":"Monocytic leukemia",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of pleura",
                "checked":false
            },
            {
                "disease":"Major depressive disorder recurrent severe without psychotic features",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cervix uteri",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic arthropathy",
                "checked":false
            },
            {
                "disease":"Body dysmorphic disorder",
                "checked":false
            },
            {
                "disease":"Inhalant abuse with inhalant-induced mood disorder",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of pituitary gland",
                "checked":false
            },
            {
                "disease":"Pneumonia due to Hemophilus influenzae",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive chronic kidney disease complicating the puerperium",
                "checked":false
            },
            {
                "disease":"disease of mediastinum not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of vestibule of mouth",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right ciliary body",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of thorax",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment hand",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of spinal meninges",
                "checked":false
            },
            {
                "disease":"disease of capillaries",
                "checked":false
            },
            {
                "disease":"Adjustment disorders",
                "checked":false
            },
            {
                "disease":"Sacrococcygeal disorders not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Hypochondriacal disorders",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic cataract",
                "checked":false
            },
            {
                "disease":"Hemophilus influenzae [H. influenzae] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Streptococcus group B as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Sézary disease lymph nodes of inguinal region and lower limb",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of left hip",
                "checked":false
            },
            {
                "disease":"Phobic anxiety disorders",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of the submandibular salivary glands",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of liver gallbladder and bile ducts",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cortex of left adrenal gland",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with hypoglycemia without coma",
                "checked":false
            },
            {
                "disease":"Coronary atherosclerosis due to lipid rich plaque",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of orbit",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule left shoulder",
                "checked":false
            },
            {
                "disease":"Eating disorders",
                "checked":false
            },
            {
                "disease":"Unilateral pulmonary emphysema [MacLeod's syndrome]",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with neurological complications",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of elbow",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease ankle and foot",
                "checked":false
            },
            {
                "disease":"Nonpneumonic Legionnaires' disease [Pontiac fever]",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of lip",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with neurological complications",
                "checked":false
            },
            {
                "disease":"Escherichia coli [E. coli ] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of thyroid gland",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right ureter",
                "checked":false
            },
            {
                "disease":"Papillomavirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Prolymphocytic leukemia of B-cell type in remission",
                "checked":false
            },
            {
                "disease":"disease of salivary glands",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of the major salivary glands",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of acoustic nerve",
                "checked":false
            },
            {
                "disease":"Poisoning by coronary vasodilators accidental (unintentional)",
                "checked":false
            },
            {
                "disease":"Psychological abuse complicating childbirth",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of right hand",
                "checked":false
            },
            {
                "disease":"Saddle embolus of pulmonary artery without acute cor pulmonale",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of urinary organs",
                "checked":false
            },
            {
                "disease":"Chronic myelomonocytic leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Hairy cell leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Post-traumatic stress disorder chronic",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of pharynx",
                "checked":false
            },
            {
                "disease":"Sandhoff disease",
                "checked":false
            },
            {
                "disease":"Deep vascularization of cornea bilateral",
                "checked":false
            },
            {
                "disease":"Cerebrovascular disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of spleen",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of hip",
                "checked":false
            },
            {
                "disease":"Disorder of ligament vertebrae",
                "checked":false
            },
            {
                "disease":"Corneal deposits in metabolic disorders",
                "checked":false
            },
            {
                "disease":"Nonrheumatic pulmonary valve stenosis",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with hypoglycemia",
                "checked":false
            },
            {
                "disease":"Alcohol abuse with alcohol-induced psychotic disorder with delusions",
                "checked":false
            },
            {
                "disease":"Post-transplant lymphoproliferative disorder (PTLD)",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ureteric orifice",
                "checked":false
            },
            {
                "disease":"Encounter for screening for eye and ear disorders",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of ankle and foot",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive chronic kidney disease complicating childbirth",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of ankle and foot",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere right forearm",
                "checked":false
            },
            {
                "disease":"Disorder of ligament right foot",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease right elbow",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right bronchus and lung",
                "checked":false
            },
            {
                "disease":"Cardiac complications of anesthesia during pregnancy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lateral wall of nasopharynx",
                "checked":false
            },
            {
                "disease":"Separation anxiety disorder of childhood",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of meninges",
                "checked":false
            },
            {
                "disease":"Chronic kidney disease stage 1",
                "checked":false
            },
            {
                "disease":"Generalized anxiety disorder",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease ankle and foot",
                "checked":false
            },
            {
                "disease":"Pain disorders related to psychological factors",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right radius",
                "checked":false
            },
            {
                "disease":"Major depressive disorder recurrent mild",
                "checked":false
            },
            {
                "disease":"Helicobacter pylori [H. pylori] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Heavy chain disease",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode hypomanic",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis",
                "checked":false
            },
            {
                "disease":"Disorders of meninges not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 1 in pregnancy",
                "checked":false
            },
            {
                "disease":"Opioid abuse with opioid-induced psychotic disorder with hallucinations",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of mesothelial tissue of pleura",
                "checked":false
            },
            {
                "disease":"Intraoperative cardiac arrest",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of choroid",
                "checked":false
            },
            {
                "disease":"Wegener's granulomatosis without renal involvement",
                "checked":false
            },
            {
                "disease":"Encounter for adjustment and management of cardiac pacemaker",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of choroid",
                "checked":false
            },
            {
                "disease":"Deep vascularization of cornea right eye",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment left shoulder",
                "checked":false
            },
            {
                "disease":"Disorder of ligament right ankle",
                "checked":false
            },
            {
                "disease":"Plasma cell leukemia in remission",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of left knee",
                "checked":false
            },
            {
                "disease":"Arthritis due to Lyme disease",
                "checked":false
            },
            {
                "disease":"Tourette's disorder",
                "checked":false
            },
            {
                "disease":"Congenital malformations of cardiac septa",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of pineal gland",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in pregnancy",
                "checked":false
            },
            {
                "disease":"Partial loss of teeth due to periodontal disease class III",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of rectum",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease left wrist",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic dermatitis",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease shoulder",
                "checked":false
            },
            {
                "disease":"Myeloid leukemia",
                "checked":false
            },
            {
                "disease":"Disorders of urea cycle metabolism",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of laryngeal cartilage",
                "checked":false
            },
            {
                "disease":"Psychological abuse confirmed",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of peripheral nerves and autonomic nervous system of abdomen",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of right ankle and foot",
                "checked":false
            },
            {
                "disease":"Shared psychotic disorder",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of bone and bone marrow",
                "checked":false
            },
            {
                "disease":"Solitary pulmonary nodule",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in the puerperium",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of wrist",
                "checked":false
            },
            {
                "disease":"Sleep disorders",
                "checked":false
            },
            {
                "disease":"Adhesive middle ear disease bilateral",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic polyneuropathy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cerebellum",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of retroperitoneum and peritoneum",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of optic nerve",
                "checked":false
            },
            {
                "disease":"Hb-SS disease with crisis",
                "checked":false
            },
            {
                "disease":"Genetic susceptibility to malignant neoplasm of ovary",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of cervix uteri",
                "checked":false
            },
            {
                "disease":"Developmental disorders of jaws",
                "checked":false
            },
            {
                "disease":"Poisoning by coronary vasodilators assault",
                "checked":false
            },
            {
                "disease":"Neonatal cerebral depression",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of oral cavity",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of paraurethral glands",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of prepuce",
                "checked":false
            },
            {
                "disease":"Mastoiditis in infectious and parasitic disease classified elsewhere left ear",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of brain stem",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of bladder",
                "checked":false
            },
            {
                "disease":"Paranoid personality disorder",
                "checked":false
            },
            {
                "disease":"Dissection of renal artery",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with fibrosis and cirrhosis of liver",
                "checked":false
            },
            {
                "disease":"Disinhibited attachment disorder of childhood",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of scrotum",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of skin",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of floor of mouth",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of thorax",
                "checked":false
            },
            {
                "disease":"Massive pulmonary hemorrhage originating in the perinatal period",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment left elbow",
                "checked":false
            },
            {
                "disease":"Renal failure following ectopic and molar pregnancy",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis right knee",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of knee",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of palate",
                "checked":false
            },
            {
                "disease":"Mast cell leukemia in remission",
                "checked":false
            },
            {
                "disease":"Vascular anomalies of eyelid",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor left hip",
                "checked":false
            },
            {
                "disease":"Mycoplasma pneumoniae [M. pneumoniae] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Ménière's disease left ear",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis vertebrae",
                "checked":false
            },
            {
                "disease":"Cardiac arrest following (induced) termination of pregnancy",
                "checked":false
            },
            {
                "disease":"Circadian rhythm sleep disorder advanced sleep phase type",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere right shoulder",
                "checked":false
            },
            {
                "disease":"Plasma cell leukemia",
                "checked":false
            },
            {
                "disease":"Anemia in chronic kidney disease",
                "checked":false
            },
            {
                "disease":"Presence of coronary angioplasty implant and graft",
                "checked":false
            },
            {
                "disease":"Glomerular disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Acute pulmonary blastomycosis",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with hypoglycemia with coma",
                "checked":false
            },
            {
                "disease":"Presence of aortocoronary bypass graft",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of vertebral column",
                "checked":false
            },
            {
                "disease":"Bipolar disorder in full remission most recent episode hypomanic",
                "checked":false
            },
            {
                "disease":"Disorders of vitreous body",
                "checked":false
            },
            {
                "disease":"Psychological abuse complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere multiple sites",
                "checked":false
            },
            {
                "disease":"Wilson's disease",
                "checked":false
            },
            {
                "disease":"Whipple's disease",
                "checked":false
            },
            {
                "disease":"Disorder of ligament",
                "checked":false
            },
            {
                "disease":"Disorders of galactose metabolism",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere left forearm",
                "checked":false
            },
            {
                "disease":"Crohn's disease of both small and large intestine with rectal bleeding",
                "checked":false
            },
            {
                "disease":"Cervical disc disorders",
                "checked":false
            },
            {
                "disease":"Deep vascularization of cornea left eye",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart disease complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere multiple sites",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ribs sternum and clavicle",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of skin and subcutaneous tissue of left leg",
                "checked":false
            },
            {
                "disease":"Psychological abuse complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere shoulder",
                "checked":false
            },
            {
                "disease":"Megaesophagus in Chagas' disease",
                "checked":false
            },
            {
                "disease":"Encounter for screening for lipoid disorders",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule left hip",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of peripheral nerves and autonomic nervous system of thorax",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease tibia and fibula",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of adrenal gland",
                "checked":false
            },
            {
                "disease":"Disorders resulting from impaired renal tubular function",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of olfactory nerve",
                "checked":false
            },
            {
                "disease":"Chronic myeloid leukemia BCR/ABL-positive in relapse",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of ureter",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of lower limb including hip",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of undescended left testis",
                "checked":false
            },
            {
                "disease":"Conversion disorder with seizures or convulsions",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of respiratory organs",
                "checked":false
            },
            {
                "disease":"Genetic susceptibility to malignant neoplasm of endometrium",
                "checked":false
            },
            {
                "disease":"Hemorrhagic disorder due to extrinsic circulating anticoagulants",
                "checked":false
            },
            {
                "disease":"Pulmonary embolism",
                "checked":false
            },
            {
                "disease":"Crohn's disease of large intestine with rectal bleeding",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of right knee",
                "checked":false
            },
            {
                "disease":"Laceration of right renal artery",
                "checked":false
            },
            {
                "disease":"Osteitis deformans [Paget's disease of bone]",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus [HIV] disease complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of wrist",
                "checked":false
            },
            {
                "disease":"Partial loss of teeth due to periodontal disease class II",
                "checked":false
            },
            {
                "disease":"Tuberculosis of adrenal glands",
                "checked":false
            },
            {
                "disease":"Hypertension secondary to endocrine disorders",
                "checked":false
            },
            {
                "disease":"Metabolic disorder following (induced) termination of pregnancy",
                "checked":false
            },
            {
                "disease":"Borderline personality disorder",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis elbow",
                "checked":false
            },
            {
                "disease":"Gender identity disorder of childhood",
                "checked":false
            },
            {
                "disease":"disease of the skin and subcutaneous tissue complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with oral complications",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left lacrimal gland and duct",
                "checked":false
            },
            {
                "disease":"Cannabis abuse with cannabis-induced anxiety disorder",
                "checked":false
            },
            {
                "disease":"Acute graft-versus-host disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of upper limb",
                "checked":false
            },
            {
                "disease":"Parvovirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Graft-versus-host disease",
                "checked":false
            },
            {
                "disease":"Pulmonary sporotrichosis",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere forearm",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of heart mediastinum and pleura",
                "checked":false
            },
            {
                "disease":"Mechanical complication of coronary artery bypass graft",
                "checked":false
            },
            {
                "disease":"Postprocedural hepatorenal syndrome",
                "checked":false
            },
            {
                "disease":"Chronic lymphocytic leukemia of B-cell type in relapse",
                "checked":false
            },
            {
                "disease":"Personality and behavioral disorders due to known physiological condition",
                "checked":false
            },
            {
                "disease":"Pulmonary eosinophilia not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Chronic inflammatory disease of uterus",
                "checked":false
            },
            {
                "disease":"Tanapox virus disease",
                "checked":false
            },
            {
                "disease":"Vascular disorders of intestine",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of long bones of right lower limb",
                "checked":false
            },
            {
                "disease":"Factitious disorder with combined psychological and physical signs and symptoms",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left orbit",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of left shoulder",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of short bones of right lower limb",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of heart",
                "checked":false
            },
            {
                "disease":"Nail disorders",
                "checked":false
            },
            {
                "disease":"Nail disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Disorder of ligament hip",
                "checked":false
            },
            {
                "disease":"Disorder of ligament left hip",
                "checked":false
            },
            {
                "disease":"Congenital renal failure",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease humerus",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease",
                "checked":false
            },
            {
                "disease":"Mixed receptive-expressive language disorder",
                "checked":false
            },
            {
                "disease":"Spondylopathy in disease classified elsewhere lumbosacral region",
                "checked":false
            },
            {
                "disease":"Renal osteodystrophy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right round ligament",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of retroperitoneum",
                "checked":false
            },
            {
                "disease":"Complete loss of teeth due to periodontal disease class IV",
                "checked":false
            },
            {
                "disease":"Major depressive disorder single episode in full remission",
                "checked":false
            },
            {
                "disease":"Opioid abuse with opioid-induced psychotic disorder",
                "checked":false
            },
            {
                "disease":"Disorders of optic chiasm in (due to) inflammatory disorders",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of labium majus",
                "checked":false
            },
            {
                "disease":"Carrier of infectious disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of middle ear",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of nasal cavity",
                "checked":false
            },
            {
                "disease":"Intervertebral disc disorders with radiculopathy lumbar region",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of skin and subcutaneous tissue of trunk",
                "checked":false
            },
            {
                "disease":"Laceration of left renal artery",
                "checked":false
            },
            {
                "disease":"Disorders of diaphragm",
                "checked":false
            },
            {
                "disease":"Atherosclerotic heart disease of native coronary artery without angina pectoris",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode manic without psychotic features",
                "checked":false
            },
            {
                "disease":"Complete loss of teeth due to periodontal disease class I",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with foot ulcer",
                "checked":false
            },
            {
                "disease":"Attention-deficit hyperactivity disorder predominantly inattentive type",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of short bones of right upper limb",
                "checked":false
            },
            {
                "disease":"Breakdown (mechanical) of cardiac electronic device",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere left ankle and foot",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode manic severe with psychotic features",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Poisoning by cardiac-stimulant glycosides and drugs of similar action assault",
                "checked":false
            },
            {
                "disease":"Minor laceration of left pulmonary blood vessels",
                "checked":false
            },
            {
                "disease":"Cardiovascular devices associated with adverse incidents",
                "checked":false
            },
            {
                "disease":"Cardiac arrest due to underlying cardiac condition",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of larynx",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with diabetic dermatitis",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 2 in childbirth",
                "checked":false
            },
            {
                "disease":"Acute myeloid leukemia with multilineage dysplasia in relapse",
                "checked":false
            },
            {
                "disease":"Childhood onset fluency disorder",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Encounter for adjustment and management of vascular access device",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of brain",
                "checked":false
            },
            {
                "disease":"Encounter for screening for musculoskeletal disorder",
                "checked":false
            },
            {
                "disease":"Diverticular disease of small intestine without perforation or abscess",
                "checked":false
            },
            {
                "disease":"Postprocedural cardiac arrest following cardiac surgery",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of mediastinum",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of abdomen",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of jejunum",
                "checked":false
            },
            {
                "disease":"Alcohol abuse with alcohol-induced psychotic disorder with hallucinations",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with moderate nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Major laceration of left pulmonary blood vessels",
                "checked":false
            },
            {
                "disease":"Hallucinogen abuse with hallucinogen-induced anxiety disorder",
                "checked":false
            },
            {
                "disease":"Disorders of aromatic amino-acid metabolism",
                "checked":false
            },
            {
                "disease":"Mast cell leukemia",
                "checked":false
            },
            {
                "disease":"Alzheimer's disease",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in the puerperium insulin controlled",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of undescended right testis",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with hyperglycemia",
                "checked":false
            },
            {
                "disease":"Eccrine sweat disorders",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 1 in the puerperium",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule hand",
                "checked":false
            },
            {
                "disease":"Chronic kidney disease stage 3 (moderate)",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of left kidney",
                "checked":false
            },
            {
                "disease":"Rheumatic disorders of both aortic and tricuspid valves",
                "checked":false
            },
            {
                "disease":"Extrarenal uremia",
                "checked":false
            },
            {
                "disease":"Encounter for screening for intestinal infectious disease",
                "checked":false
            },
            {
                "disease":"Degenerative and vascular disorders of ear",
                "checked":false
            },
            {
                "disease":"Acute Chagas' disease with heart involvement",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease thigh",
                "checked":false
            },
            {
                "disease":"Circadian rhythm sleep disorder irregular sleep wake type",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cheek mucosa",
                "checked":false
            },
            {
                "disease":"Changes in retinal vascular appearance right eye",
                "checked":false
            },
            {
                "disease":"Liver and biliary tract disorders in the puerperium",
                "checked":false
            },
            {
                "disease":"Sézary disease lymph nodes of axilla and upper limb",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right fibula",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with hypoglycemia",
                "checked":false
            },
            {
                "disease":"Reiter's disease knee",
                "checked":false
            },
            {
                "disease":"Crohn's disease of large intestine",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left ureter",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of glottis",
                "checked":false
            },
            {
                "disease":"Carrier of bacterial disease due to streptococci",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of tonsillar pillar (anterior) (posterior)",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease multiple sites",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of submandibular gland",
                "checked":false
            },
            {
                "disease":"disease of the respiratory system complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment vertebrae",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of supraglottis",
                "checked":false
            },
            {
                "disease":"Partial loss of teeth due to periodontal disease",
                "checked":false
            },
            {
                "disease":"Psychological abuse complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 1 in childbirth",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease left hip",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of left hand",
                "checked":false
            },
            {
                "disease":"Huntington's disease",
                "checked":false
            },
            {
                "disease":"Cervical disc disorder with radiculopathy  high cervical region",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease shoulder",
                "checked":false
            },
            {
                "disease":"Acute erythroid leukemia",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of brain",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of bone and articular cartilage of limbs",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of multiple sites",
                "checked":false
            },
            {
                "disease":"Somatoform disorders",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment ankle and foot",
                "checked":false
            },
            {
                "disease":"Cytomegaloviral disease",
                "checked":false
            },
            {
                "disease":"Disseminated intravascular coagulation of newborn",
                "checked":false
            },
            {
                "disease":"Kyasanur Forest disease",
                "checked":false
            },
            {
                "disease":"Ebola virus disease",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of major salivary glands",
                "checked":false
            },
            {
                "disease":"Disorders of purine and pyrimidine metabolism",
                "checked":false
            },
            {
                "disease":"ST elevation (STEMI) myocardial infarction involving left main coronary artery",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of lacrimal gland and duct",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left humerus",
                "checked":false
            },
            {
                "disease":"Sedative hypnotic or anxiolytic related disorders",
                "checked":false
            },
            {
                "disease":"Pulmonary paracoccidioidomycosis",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left adrenal gland",
                "checked":false
            },
            {
                "disease":"Metabolic disorders following an ectopic and molar pregnancy",
                "checked":false
            },
            {
                "disease":"Cocaine abuse with cocaine-induced mood disorder",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of the sublingual salivary glands",
                "checked":false
            },
            {
                "disease":"Reiter's disease shoulder",
                "checked":false
            },
            {
                "disease":"Cardiac failure due to anesthesia during pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Ménière's disease right ear",
                "checked":false
            },
            {
                "disease":"Sézary disease intra-abdominal lymph nodes",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of lymph nodes",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of posterior wall of nasopharynx",
                "checked":false
            },
            {
                "disease":"Preparatory care for renal dialysis",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of mesothelial tissue",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pylorus",
                "checked":false
            },
            {
                "disease":"Opioid abuse with opioid-induced mood disorder",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode depressed mild",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lower lobe left bronchus or lung",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis",
                "checked":false
            },
            {
                "disease":"Pulmonary edema due to chemicals gases fumes and vapors",
                "checked":false
            },
            {
                "disease":"Acute monoblastic/monocytic leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of tail of pancreas",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with hepatic necrosis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of trachea",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of craniopharyngeal duct",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of right hip",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of respiratory and digestive organs",
                "checked":false
            },
            {
                "disease":"Cardiac arrest due to anesthesia during pregnancy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of myometrium",
                "checked":false
            },
            {
                "disease":"Acute myeloid leukemia with 11q23-abnormality in relapse",
                "checked":false
            },
            {
                "disease":"Attention-deficit hyperactivity disorders",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with hyperosmolarity",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease right hand",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease upper arm",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere left upper arm",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with diabetic neuropathic arthropathy",
                "checked":false
            },
            {
                "disease":"Reiter's disease hip",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with hypoglycemia",
                "checked":false
            },
            {
                "disease":"Alcohol abuse with alcohol-induced mood disorder",
                "checked":false
            },
            {
                "disease":"Major depressive disorder single episode mild",
                "checked":false
            },
            {
                "disease":"Impulse disorders",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment shoulder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of posterior wall of bladder",
                "checked":false
            },
            {
                "disease":"Cannabis abuse with psychotic disorder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of thorax",
                "checked":false
            },
            {
                "disease":"Crohn's disease of both small and large intestine with fistula",
                "checked":false
            },
            {
                "disease":"Disorders of lysine and hydroxylysine metabolism",
                "checked":false
            },
            {
                "disease":"Congenital multiple renal cysts",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right renal pelvis",
                "checked":false
            },
            {
                "disease":"Localized vascularization of cornea",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment right knee",
                "checked":false
            },
            {
                "disease":"Chronic kidney disease (CKD)",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of elbow",
                "checked":false
            },
            {
                "disease":"Cocaine abuse with cocaine-induced psychotic disorder with hallucinations",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm complicating pregnancy",
                "checked":false
            },
            {
                "disease":"disease of bronchus not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of descended right testis",
                "checked":false
            },
            {
                "disease":"Cannabis abuse with psychotic disorder with hallucinations",
                "checked":false
            },
            {
                "disease":"Disorders of optic chiasm",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with periodontal disease",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment left wrist",
                "checked":false
            },
            {
                "disease":"Nonrheumatic aortic valve disorders",
                "checked":false
            },
            {
                "disease":"Respiratory syncytial virus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of stomach",
                "checked":false
            },
            {
                "disease":"Major depressive disorder single episode moderate",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere left ankle and foot",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic polyneuropathy",
                "checked":false
            },
            {
                "disease":"Meningitis due to Lyme disease",
                "checked":false
            },
            {
                "disease":"Nonrheumatic tricuspid valve disorders",
                "checked":false
            },
            {
                "disease":"Alcohol abuse with alcohol-induced psychotic disorder",
                "checked":false
            },
            {
                "disease":"Manic episode without psychotic symptoms moderate",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor right shoulder",
                "checked":false
            },
            {
                "disease":"Noninfective disorders of pinna",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of intrathoracic organs",
                "checked":false
            },
            {
                "disease":"disease of the circulatory system complicating childbirth",
                "checked":false
            },
            {
                "disease":"Disorders of retroperitoneum",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with proliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Disorders of magnesium metabolism",
                "checked":false
            },
            {
                "disease":"Deep vascularization of cornea",
                "checked":false
            },
            {
                "disease":"Acute myeloid leukemia with multilineage dysplasia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of right elbow",
                "checked":false
            },
            {
                "disease":"Oligospermia due to systemic disease",
                "checked":false
            },
            {
                "disease":"Disorders of muscle tone of newborn",
                "checked":false
            },
            {
                "disease":"Disorder of ligament wrist",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule shoulder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right retina",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of right knee",
                "checked":false
            },
            {
                "disease":"Enterococcus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of parathyroid gland",
                "checked":false
            },
            {
                "disease":"Intraoperative cardiac arrest during cardiac surgery",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) neoplasm right side",
                "checked":false
            },
            {
                "disease":"Acute promyelocytic leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Neonatal cardiac failure",
                "checked":false
            },
            {
                "disease":"Atrophic disorders of skin",
                "checked":false
            },
            {
                "disease":"Major depressive disorder recurrent in remission",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere left upper arm",
                "checked":false
            },
            {
                "disease":"Factitious disorder with predominantly physical signs and symptoms",
                "checked":false
            },
            {
                "disease":"Intracardiac thrombosis not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of eye and adnexa",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease wrist",
                "checked":false
            },
            {
                "disease":"Post-traumatic stress disorder acute",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of testis",
                "checked":false
            },
            {
                "disease":"Disorders of external ear in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Von Willebrand's disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of urinary organs",
                "checked":false
            },
            {
                "disease":"Stereotyped movement disorders",
                "checked":false
            },
            {
                "disease":"Arteriovenous malformation of renal vessel",
                "checked":false
            },
            {
                "disease":"Minor laceration of right pulmonary blood vessels",
                "checked":false
            },
            {
                "disease":"Thromboangiitis obliterans [Buerger's disease]",
                "checked":false
            },
            {
                "disease":"Avoidant personality disorder",
                "checked":false
            },
            {
                "disease":"Megacolon in Chagas' disease",
                "checked":false
            },
            {
                "disease":"Chagas' disease (chronic) with heart involvement",
                "checked":false
            },
            {
                "disease":"Vascular anomalies of left upper eyelid",
                "checked":false
            },
            {
                "disease":"Diverticular disease of intestine",
                "checked":false
            },
            {
                "disease":"Bipolar disorder in full remission most recent episode mixed",
                "checked":false
            },
            {
                "disease":"Noninfective disorders of pinna right ear",
                "checked":false
            },
            {
                "disease":"Sézary disease intrathoracic lymph nodes",
                "checked":false
            },
            {
                "disease":"Osteopathies in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with neurological complications",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis left elbow",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of left renal pelvis",
                "checked":false
            },
            {
                "disease":"von Gierke disease",
                "checked":false
            },
            {
                "disease":"disease of the nervous system complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of frontal sinus",
                "checked":false
            },
            {
                "disease":"Peripheral vascular angioplasty status",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere right forearm",
                "checked":false
            },
            {
                "disease":"Marburg virus disease",
                "checked":false
            },
            {
                "disease":"Chronic graft-versus-host disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cerebral ventricle",
                "checked":false
            },
            {
                "disease":"Cerebellar ataxia in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex",
                "checked":false
            },
            {
                "disease":"disease of the skin and subcutaneous tissue complicating childbirth",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease vertebrae",
                "checked":false
            },
            {
                "disease":"Influenza due to unidentified influenza virus with gastrointestinal manifestations",
                "checked":false
            },
            {
                "disease":"Disorders of tooth development and eruption",
                "checked":false
            },
            {
                "disease":"Hypertensive heart disease with heart failure",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of uterine tubes and ligaments",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with ketoacidosis with coma",
                "checked":false
            },
            {
                "disease":"Aortitis in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Congenital viral disease",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment shoulder",
                "checked":false
            },
            {
                "disease":"Otitis media in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule elbow",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right testis",
                "checked":false
            },
            {
                "disease":"Iodine-deficiency related thyroid disorders and allied conditions",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in pregnancy insulin controlled",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of right shoulder",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor hand",
                "checked":false
            },
            {
                "disease":"Hairy cell leukemia in remission",
                "checked":false
            },
            {
                "disease":"Acute promyelocytic leukemia in remission",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of skin and subcutaneous tissue of left arm",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of craniopharyngeal duct",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right ovary",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pancreatic duct",
                "checked":false
            },
            {
                "disease":"Circadian rhythm sleep disorders",
                "checked":false
            },
            {
                "disease":"Major depressive disorder single episode severe with psychotic features",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of clitoris",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of nasopharynx",
                "checked":false
            },
            {
                "disease":"Expressive language disorder",
                "checked":false
            },
            {
                "disease":"Adverse effect of coronary vasodilators",
                "checked":false
            },
            {
                "disease":"Chronic kidney disease stage 2 (mild)",
                "checked":false
            },
            {
                "disease":"Disorder of ligament left elbow",
                "checked":false
            },
            {
                "disease":"Hemolytic disease of newborn",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cornea",
                "checked":false
            },
            {
                "disease":"Narcissistic personality disorder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of tonsillar fossa",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene",
                "checked":false
            },
            {
                "disease":"Disorders of fatty-acid metabolism",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right fallopian tube",
                "checked":false
            },
            {
                "disease":"Atypical chronic myeloid leukemia BCR/ABL-negative in remission",
                "checked":false
            },
            {
                "disease":"Transepidermal elimination disorders",
                "checked":false
            },
            {
                "disease":"Extrapyramidal and movement disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right adrenal gland",
                "checked":false
            },
            {
                "disease":"Reversible cerebrovascular vasoconstriction syndrome",
                "checked":false
            },
            {
                "disease":"Saddle embolus of pulmonary artery with acute cor pulmonale",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of occipital lobe",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of pelvic bones sacrum and coccyx",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere right ankle and foot",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of left ovary",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with hyperglycemia",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of pancreas",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of head face and neck",
                "checked":false
            },
            {
                "disease":"disease of pulp and periapical tissues",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of frontal lobe",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with ophthalmic complications",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere left upper arm",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule left elbow",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment right wrist",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of bone and articular cartilage of limb",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of ankle and foot",
                "checked":false
            },
            {
                "disease":"Intracranial and intraspinal abscess and granuloma in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Acute monoblastic/monocytic leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of bronchus and lung",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease right ankle and foot",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pancreas",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment left shoulder",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with ketoacidosis with coma",
                "checked":false
            },
            {
                "disease":"Niemann-Pick disease type D",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cerebrum except lobes and ventricles",
                "checked":false
            },
            {
                "disease":"Echovirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of cecum",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of pancreas",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of skin and subcutaneous tissue of right leg",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis",
                "checked":false
            },
            {
                "disease":"Psychological abuse complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Corneal deposits in metabolic disorders right eye",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere right forearm",
                "checked":false
            },
            {
                "disease":"Adjustment disorder with mixed anxiety and depressed mood",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left conjunctiva",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of left wrist",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of endocrine pancreas",
                "checked":false
            },
            {
                "disease":"Mature B-cell leukemia Burkitt-type not having achieved remission",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment left knee",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease left shoulder",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease",
                "checked":false
            },
            {
                "disease":"Obsessive-compulsive disorder",
                "checked":false
            },
            {
                "disease":"Celiac disease",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment right wrist",
                "checked":false
            },
            {
                "disease":"Influenza due to unidentified influenza virus",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of posterior mediastinum",
                "checked":false
            },
            {
                "disease":"Harada's disease left eye",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of meninges",
                "checked":false
            },
            {
                "disease":"Allergic bronchopulmonary aspergillosis",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic peripheral angiopathy with gangrene",
                "checked":false
            },
            {
                "disease":"Prolymphocytic leukemia of T-cell type in relapse",
                "checked":false
            },
            {
                "disease":"Sézary disease lymph nodes of head face and neck",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere upper arm",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment left hand",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of fundus of stomach",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left kidney",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart disease complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with skin complications",
                "checked":false
            },
            {
                "disease":"disease of the nervous system complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Sleep related movement disorders",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor hip",
                "checked":false
            },
            {
                "disease":"Endomyocardial (eosinophilic) disease",
                "checked":false
            },
            {
                "disease":"Intervertebral disc disorders with myelopathy thoracic region",
                "checked":false
            },
            {
                "disease":"Chagas' disease (chronic) with nervous system involvement",
                "checked":false
            },
            {
                "disease":"Harada's disease right eye",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere lower leg",
                "checked":false
            },
            {
                "disease":"Carrier of bacterial disease due to staphylococci",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with hypoglycemia with coma",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor right hand",
                "checked":false
            },
            {
                "disease":"Ross River disease",
                "checked":false
            },
            {
                "disease":"Circadian rhythm sleep disorder free running type",
                "checked":false
            },
            {
                "disease":"Neonatal diabetes mellitus",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic chronic kidney disease",
                "checked":false
            },
            {
                "disease":"Adult T-cell lymphoma/leukemia (HTLV-1-associated) in relapse",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of descending colon",
                "checked":false
            },
            {
                "disease":"Myotonic disorders",
                "checked":false
            },
            {
                "disease":"Common variable immunodeficiency with predominant immunoregulatory T-cell disorders",
                "checked":false
            },
            {
                "disease":"Bladder disorders in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of stomach",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis",
                "checked":false
            },
            {
                "disease":"Cardiac tamponade",
                "checked":false
            },
            {
                "disease":"Congenital malformations of adrenal gland",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of cardia",
                "checked":false
            },
            {
                "disease":"Acute megakaryoblastic leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Disorders of glycoprotein metabolism",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic mononeuropathy",
                "checked":false
            },
            {
                "disease":"Pulmonary toxoplasmosis",
                "checked":false
            },
            {
                "disease":"disease of spleen",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lateral floor of mouth",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) neoplasm",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease left ankle and foot",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease pelvis and femur",
                "checked":false
            },
            {
                "disease":"Retinal vascular occlusions",
                "checked":false
            },
            {
                "disease":"Functional disorders of polymorphonuclear neutrophils",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lower limb",
                "checked":false
            },
            {
                "disease":"Mastoiditis in infectious and parasitic disease classified elsewhere bilateral",
                "checked":false
            },
            {
                "disease":"Conversion disorder with mixed symptom presentation",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of dorsal surface of tongue",
                "checked":false
            },
            {
                "disease":"Labor and delivery complicated by vascular lesion of cord",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis shoulder",
                "checked":false
            },
            {
                "disease":"Sickle-cell/Hb-C disease without crisis",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of upper limb including shoulder",
                "checked":false
            },
            {
                "disease":"Flax-dressers' disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of labium minus",
                "checked":false
            },
            {
                "disease":"Hydronephrosis with renal and ureteral calculous obstruction",
                "checked":false
            },
            {
                "disease":"disease of the digestive system complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Bipolar disorder in full remission most recent episode manic",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease left elbow",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus without complications",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere shoulder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left choroid",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ciliary body",
                "checked":false
            },
            {
                "disease":"Disorders of left acoustic nerve",
                "checked":false
            },
            {
                "disease":"Chronic lymphocytic leukemia of B-cell type in remission",
                "checked":false
            },
            {
                "disease":"Pathological fracture in neoplastic disease right shoulder",
                "checked":false
            },
            {
                "disease":"Benign lipomatous neoplasm of kidney",
                "checked":false
            },
            {
                "disease":"Thoracic root disorders not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart disease complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"disease of the respiratory system complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Psychotic disorder with delusions due to known physiological condition",
                "checked":false
            },
            {
                "disease":"Alcohol abuse with alcohol-induced sleep disorder",
                "checked":false
            },
            {
                "disease":"Acute bronchitis due to parainfluenza virus",
                "checked":false
            },
            {
                "disease":"Sézary disease",
                "checked":false
            },
            {
                "disease":"Disorders of tyrosine metabolism",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of spinal cord",
                "checked":false
            },
            {
                "disease":"Sleep disorders not due to a substance or known physiological condition",
                "checked":false
            },
            {
                "disease":"Postprocedural cardiac arrest",
                "checked":false
            },
            {
                "disease":"Multiple valve disease",
                "checked":false
            },
            {
                "disease":"Bacteroides fragilis [B. fragilis] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Intervertebral disc disorders with radiculopathy lumbosacral region",
                "checked":false
            },
            {
                "disease":"Disorders of bilateral acoustic nerves",
                "checked":false
            },
            {
                "disease":"Congenital obstructive defects of renal pelvis and congenital malformations of ureter",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of adrenal gland",
                "checked":false
            },
            {
                "disease":"Complete loss of teeth due to periodontal disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of uvula",
                "checked":false
            },
            {
                "disease":"Nonrheumatic pulmonary valve stenosis with insufficiency",
                "checked":false
            },
            {
                "disease":"Bipolar disorder in partial remission most recent episode mixed",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pleura",
                "checked":false
            },
            {
                "disease":"Maple-syrup-urine disease",
                "checked":false
            },
            {
                "disease":"Conduct disorder childhood-onset type",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere left lower leg",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment right elbow",
                "checked":false
            },
            {
                "disease":"Cardiovascular and cerebrovascular syphilis",
                "checked":false
            },
            {
                "disease":"Hyperuricemia without signs of inflammatory arthritis and tophaceous disease",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of corpus uteri",
                "checked":false
            },
            {
                "disease":"Encounter for fitting and adjustment of non-vascular catheter",
                "checked":false
            },
            {
                "disease":"Pre-existing diabetes mellitus type 2 in pregnancy",
                "checked":false
            },
            {
                "disease":"Niemann-Pick disease type B",
                "checked":false
            },
            {
                "disease":"Puerperal psychosis",
                "checked":false
            },
            {
                "disease":"Major depressive disorder single episode severe without psychotic features",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of temporal lobe",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis without rheumatoid factor wrist",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of thymus",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with periodontal disease",
                "checked":false
            },
            {
                "disease":"Pain disorder with related psychological factors",
                "checked":false
            },
            {
                "disease":"Nephrotic syndrome with dense deposit disease",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment multiple sites",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) vascular disorders",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule right knee",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of Waldeyer's ring",
                "checked":false
            },
            {
                "disease":"Disorder of ligament shoulder",
                "checked":false
            },
            {
                "disease":"Alcoholic liver disease",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of right ovary",
                "checked":false
            },
            {
                "disease":"Atypical chronic myeloid leukemia BCR/ABL-negative",
                "checked":false
            },
            {
                "disease":"Pulmonary anthrax",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of long bones of lower limb",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of anus and anal canal",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left epididymis",
                "checked":false
            },
            {
                "disease":"disease of the skin and subcutaneous tissue complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Vascular abnormalities of conjunctiva",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of lung",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of peripheral nerves and autonomic nervous system",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of thyroid gland",
                "checked":false
            },
            {
                "disease":"Viral agents as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of knee",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of short bones of right upper limb",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease hand",
                "checked":false
            },
            {
                "disease":"Myelitis in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Pulmonary valve atresia",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of pelvis",
                "checked":false
            },
            {
                "disease":"Reiter's disease ankle and foot",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere left hand",
                "checked":false
            },
            {
                "disease":"Hypertensive heart disease",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease elbow",
                "checked":false
            },
            {
                "disease":"Cardiac allograft vasculopathy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of accessory sinuses",
                "checked":false
            },
            {
                "disease":"Papilledema associated with retinal disorder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of right conjunctiva",
                "checked":false
            },
            {
                "disease":"Cardiac septal defect acquired",
                "checked":false
            },
            {
                "disease":"Mast cell leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of fallopian tube",
                "checked":false
            },
            {
                "disease":"Mature B-cell leukemia Burkitt-type in remission",
                "checked":false
            },
            {
                "disease":"Encounter for screening for cardiovascular disorders",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of left bronchus and lung",
                "checked":false
            },
            {
                "disease":"Acute myeloid leukemia with multilineage dysplasia in remission",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with ophthalmic complications",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves and autonomic nervous system",
                "checked":false
            },
            {
                "disease":"Cocaine abuse with cocaine-induced psychotic disorder with delusions",
                "checked":false
            },
            {
                "disease":"Chikungunya virus disease",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of descending colon",
                "checked":false
            },
            {
                "disease":"Schizoaffective disorder bipolar type",
                "checked":false
            },
            {
                "disease":"Sequelae of inflammatory disease of central nervous system",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of long bones of right lower limb",
                "checked":false
            },
            {
                "disease":"Cyclothymic disorder",
                "checked":false
            },
            {
                "disease":"Chronic myeloproliferative disease",
                "checked":false
            },
            {
                "disease":"Coxsackievirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of left ankle and foot",
                "checked":false
            },
            {
                "disease":"Rheumatoid bursitis right elbow",
                "checked":false
            },
            {
                "disease":"Agoraphobia with panic disorder",
                "checked":false
            },
            {
                "disease":"Fluency disorder following nontraumatic intracerebral hemorrhage",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of scapula and long bones of upper limb",
                "checked":false
            },
            {
                "disease":"Adult-onset Still's disease",
                "checked":false
            },
            {
                "disease":"Bipolar disorder in partial remission most recent episode hypomanic",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of soft tissue of retroperitoneum",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere right ankle and foot",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of left kidney and renal pelvis",
                "checked":false
            },
            {
                "disease":"Partial loss of teeth due to periodontal disease class IV",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of renal pelvis",
                "checked":false
            },
            {
                "disease":"Disorder of ligament right elbow",
                "checked":false
            },
            {
                "disease":"Encounter for screening for malignant neoplasm of small intestine",
                "checked":false
            },
            {
                "disease":"Cervical disc disorder with myelopathy",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of short bones of upper limb",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of bladder",
                "checked":false
            },
            {
                "disease":"Disorders of orbit",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of brain supratentorial",
                "checked":false
            },
            {
                "disease":"Mast cell leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of right elbow",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease left hand",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment left ankle and foot",
                "checked":false
            },
            {
                "disease":"Sequelae of cerebrovascular disease",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of scapula and long bones of right upper limb",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ethmoidal sinus",
                "checked":false
            },
            {
                "disease":"Refsum's disease",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere multiple sites",
                "checked":false
            },
            {
                "disease":"Dementia with Lewy bodies",
                "checked":false
            },
            {
                "disease":"Vertiginous syndromes in disease classified elsewhere left ear",
                "checked":false
            },
            {
                "disease":"Hepatorenal syndrome",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of left ureter",
                "checked":false
            },
            {
                "disease":"Noninfective disorders of pinna left ear",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease left lower leg",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of retroperitoneum and peritoneum",
                "checked":false
            },
            {
                "disease":"Rheumatoid myopathy with rheumatoid arthritis of left elbow",
                "checked":false
            },
            {
                "disease":"Bipolar disorder current episode mixed",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of anal canal",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment knee",
                "checked":false
            },
            {
                "disease":"Exanthema subitum [sixth disease] due to human herpesvirus 7",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus without complications",
                "checked":false
            },
            {
                "disease":"Changes in retinal vascular appearance bilateral",
                "checked":false
            },
            {
                "disease":"Congenital renal artery stenosis",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic arthropathy",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment left hip",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with hepatitis not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Chronic gout due to renal impairment right elbow",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of right knee",
                "checked":false
            },
            {
                "disease":"Disorder of ligament left shoulder",
                "checked":false
            },
            {
                "disease":"Abnormal results of pulmonary function studies",
                "checked":false
            },
            {
                "disease":"Hydrops fetalis not due to hemolytic disease",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in childbirth diet controlled",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) vascular disorders",
                "checked":false
            },
            {
                "disease":"Crohn's disease of large intestine with intestinal obstruction",
                "checked":false
            },
            {
                "disease":"Chronic myeloid leukemia BCR/ABL-positive in remission",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of mediastinum",
                "checked":false
            },
            {
                "disease":"Gastro-esophageal reflux disease",
                "checked":false
            },
            {
                "disease":"Acute lymphoblastic leukemia in remission",
                "checked":false
            },
            {
                "disease":"Apocrine sweat disorders",
                "checked":false
            },
            {
                "disease":"Chronic respiratory disease originating in the perinatal period",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of parotid gland",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of urethra",
                "checked":false
            },
            {
                "disease":"Neoplasm of uncertain behavior of the parotid salivary glands",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of left eye and adnexa",
                "checked":false
            },
            {
                "disease":"Bipolar disorder in partial remission most recent episode manic",
                "checked":false
            },
            {
                "disease":"Crohn's disease [regional enteritis]",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of parametrium",
                "checked":false
            },
            {
                "disease":"Onchocerciasis with eye disease",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease multiple sites",
                "checked":false
            },
            {
                "disease":"Pneumonia in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Cardiac complications of anesthesia during the puerperium",
                "checked":false
            },
            {
                "disease":"Poisoning by phenothiazine antipsychotics and neuroleptics assault",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of retroperitoneum and peritoneum",
                "checked":false
            },
            {
                "disease":"Chronic myelomonocytic leukemia",
                "checked":false
            },
            {
                "disease":"Cocaine abuse with cocaine-induced sleep disorder",
                "checked":false
            },
            {
                "disease":"SARS-associated coronavirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Lentivirus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Encounter for checking and testing of cardiac pacemaker pulse generator [battery]",
                "checked":false
            },
            {
                "disease":"Reiter's disease left knee",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of carotid body",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of medulla of right adrenal gland",
                "checked":false
            },
            {
                "disease":"Schizoid personality disorder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm complicating childbirth",
                "checked":false
            },
            {
                "disease":"Influenza due to identified novel influenza A virus with pneumonia",
                "checked":false
            },
            {
                "disease":"Disorders of pyruvate metabolism and gluconeogenesis",
                "checked":false
            },
            {
                "disease":"Disorders of right acoustic nerve",
                "checked":false
            },
            {
                "disease":"Erythema in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Contusion of adrenal gland",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with neurological complications with diabetic polyneuropathy",
                "checked":false
            },
            {
                "disease":"Direct infection of right wrist in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with mild nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive chronic kidney disease complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Atherosclerotic heart disease of native coronary artery with angina pectoris with documented spasm",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of right shoulder without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of anterior mediastinum",
                "checked":false
            },
            {
                "disease":"Acute myeloid leukemia with 11q23-abnormality not having achieved remission",
                "checked":false
            },
            {
                "disease":"Endocrine nutritional and metabolic disease complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of shoulder without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Acoustic neuritis in infectious and parasitic disease classified elsewhere bilateral",
                "checked":false
            },
            {
                "disease":"Disorders of muscle in disease classified elsewhere right lower leg",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of nonautologous biological coronary artery bypass graft(s) with unstable angina pectoris",
                "checked":false
            },
            {
                "disease":"Systemic atrophies primarily affecting central nervous system in disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of border of tongue",
                "checked":false
            },
            {
                "disease":"Hypertensive heart and chronic kidney disease without heart failure with stage 5 chronic kidney disease or end stage renal disease",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of native coronary artery of transplanted heart without angina pectoris",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with proliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"disease of the nervous system complicating childbirth",
                "checked":false
            },
            {
                "disease":"Mood disorder due to known physiological condition with major depressive-like episode",
                "checked":false
            },
            {
                "disease":"Intraoperative and postprocedural complications and disorders of ear and mastoid process not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Direct infection of left knee in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of scapula and long bones of right upper limb",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of wrist without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Psychological and behavioral factors associated with disorders or disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with severe nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Encounter for screening for disease of the blood and blood-forming organs and certain disorders involving the immune mechanism",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with severe nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment right ankle and foot",
                "checked":false
            },
            {
                "disease":"Atypical chronic myeloid leukemia BCR/ABL-negative in relapse",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of nipple and areola",
                "checked":false
            },
            {
                "disease":"Direct infection of right hip in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of right wrist without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of elbow without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Ménière's disease",
                "checked":false
            },
            {
                "disease":"Direct infection of left ankle and foot in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Disorders of the eye following cataract surgery",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of bypass graft of coronary artery of transplanted heart with unstable angina",
                "checked":false
            },
            {
                "disease":"Respiratory bronchiolitis interstitial lung disease",
                "checked":false
            },
            {
                "disease":"Disorders of visual cortex in (due to) inflammatory disorders right side of brain",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of bypass graft of coronary artery of transplanted heart without angina pectoris",
                "checked":false
            },
            {
                "disease":"Poisoning by coronary vasodilators intentional self-harm",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of left knee without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"disease of the digestive system complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Atherosclerotic heart disease of native coronary artery with unstable angina pectoris",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with mild nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Maternal infectious and parasitic disease classifiable elsewhere but complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of middle lobe bronchus or lung",
                "checked":false
            },
            {
                "disease":"Poisoning by adverse effect of and underdosing of phenothiazine antipsychotics and neuroleptics",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of nonautologous biological coronary artery bypass graft(s) with angina pectoris with documented spasm",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart and chronic kidney disease complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment left hand",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of right elbow without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with neurological complications with diabetic autonomic (poly)neuropathy",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart and chronic kidney disease complicating the puerperium",
                "checked":false
            },
            {
                "disease":"Endocrine nutritional and metabolic disease complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"disease of the digestive system complicating pregnancy",
                "checked":false
            },
            {
                "disease":"Disorders of visual pathways in (due to) inflammatory disorders left side",
                "checked":false
            },
            {
                "disease":"Rheumatoid nodule multiple sites",
                "checked":false
            },
            {
                "disease":"Thoracic thoracolumbar and lumbosacral intervertebral disc disorders with myelopathy",
                "checked":false
            },
            {
                "disease":"Poisoning by cardiac-stimulant glycosides and drugs of similar action undetermined",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of ileum",
                "checked":false
            },
            {
                "disease":"Encounter for prophylactic surgery for risk factors related to malignant neoplasms",
                "checked":false
            },
            {
                "disease":"Direct infection of left wrist in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of left hip without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with severe nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Zoster ocular disease",
                "checked":false
            },
            {
                "disease":"Therapeutic (nonsurgical) and rehabilitative cardiovascular devices associated with adverse incidents",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with diabetic peripheral angiopathy with gangrene",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of ankle and foot without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic chronic kidney disease",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart and chronic kidney disease complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of left wrist without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Mental disorders and disease of the nervous system complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Methicillin susceptible Staphylococcus aureus infection as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Variant Creutzfeldt-Jakob disease",
                "checked":false
            },
            {
                "disease":"Direct infection of left elbow in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of vertebral column",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with proliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Toxic myoneural disorders",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with proliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of multiple sites without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of autologous artery coronary artery bypass graft(s) with angina pectoris with documented spasm",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease left hand",
                "checked":false
            },
            {
                "disease":"disease of the respiratory system complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of hip without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of nasopharynx",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of peripheral nerves and autonomic nervous system",
                "checked":false
            },
            {
                "disease":"Antepartum hemorrhage with disseminated intravascular coagulation second trimester",
                "checked":false
            },
            {
                "disease":"Intraoperative and postprocedural complications and disorders of nervous system not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Sedative hypnotic or anxiolytic abuse with sedative hypnotic or anxiolytic-induced psychotic disorder with hallucinations",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of conjunctiva",
                "checked":false
            },
            {
                "disease":"Sedative hypnotic or anxiolytic abuse with sedative hypnotic or anxiolytic-induced sleep disorder",
                "checked":false
            },
            {
                "disease":"Shiga toxin-producing Escherichia coli [E. coli] (STEC) O157 as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Chronic myelomonocytic leukemia in remission",
                "checked":false
            },
            {
                "disease":"Hallucinogen abuse with hallucinogen-induced psychotic disorder with hallucinations",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with neurological complications with diabetic mononeuropathy",
                "checked":false
            },
            {
                "disease":"Poisoning by adverse effect of and underdosing of agents primarily affecting the cardiovascular system",
                "checked":false
            },
            {
                "disease":"Endocrine nutritional and metabolic disease complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with mild nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of bone and articular cartilage of right limb",
                "checked":false
            },
            {
                "disease":"Disorders of puberty not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Kaschin-Beck disease right knee",
                "checked":false
            },
            {
                "disease":"Hypertensive chronic kidney disease with stage 5 chronic kidney disease or end stage renal disease",
                "checked":false
            },
            {
                "disease":"Human T-cell lymphotrophic virus type I [HTLV-I] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive chronic kidney disease complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart disease complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive chronic kidney disease complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Congenital renal cyst",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with proliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Hemorrhagic disorder due to intrinsic circulating anticoagulants antibodies or inhibitors",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic autonomic (poly)neuropathy",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with mild nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Immunoproliferative small intestinal disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of left shoulder without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Rheumatic tricuspid valve disease",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of left elbow",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with hyperosmolarity without nonketotic hyperglycemic-hyperosmolar coma (NKHHC)",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of bypass graft of coronary artery of transplanted heart with angina pectoris",
                "checked":false
            },
            {
                "disease":"Intraoperative and postprocedural complications and disorders of eye and adnexa not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Rheumatoid lung disease with rheumatoid arthritis of right hand",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with severe nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of autologous vein coronary artery bypass graft(s) with unstable angina pectoris",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis of hand",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of transverse colon",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of autologous artery coronary artery bypass graft(s) with angina pectoris",
                "checked":false
            },
            {
                "disease":"Acute on chronic graft-versus-host disease",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with moderate nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with mild nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Disorders of refraction and accommodation",
                "checked":false
            },
            {
                "disease":"Direct infection of vertebrae in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of nasopharynx",
                "checked":false
            },
            {
                "disease":"Postprocedural hemorrhage and hematoma of a circulatory system organ or structure following cardiac bypass",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic nephropathy",
                "checked":false
            },
            {
                "disease":"Acoustic neuritis in infectious and parasitic disease classified elsewhere right ear",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with moderate nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of native coronary artery of transplanted heart with unstable angina",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Cardiac complications of anesthesia during labor and delivery",
                "checked":false
            },
            {
                "disease":"Direct infection of multiple joints in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Osteitis deformans in neoplastic disease right hand",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with moderate nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of overlapping sites of bone and articular cartilage of left limb",
                "checked":false
            },
            {
                "disease":"Renovascular hypertension",
                "checked":false
            },
            {
                "disease":"Maternal malignant neoplasms traumatic injuries and abuse classifiable elsewhere but complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Mechanical complication of coronary artery bypass graft and biological heart valve graft",
                "checked":false
            },
            {
                "disease":"Diagnostic and monitoring cardiovascular devices associated with adverse incidents",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of hand without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Direct infection of right knee in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Poisoning by adverse effect of and underdosing of cardiac-stimulant glycosides and drugs of similar action",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of right hip without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic peripheral angiopathy with gangrene",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of autologous vein coronary artery bypass graft(s) with angina pectoris",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of left ankle and foot without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Direct infection of right hand in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with diabetic neuropathic arthropathy",
                "checked":false
            },
            {
                "disease":"Sedative hypnotic or anxiolytic abuse with sedative hypnotic or anxiolytic-induced psychotic disorder",
                "checked":false
            },
            {
                "disease":"Surgical instruments materials and cardiovascular devices (including sutures) associated with adverse incidents",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with moderate nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Hypertensive heart and chronic kidney disease with heart failure and with stage 5 chronic kidney disease or end stage renal disease",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of nonautologous biological coronary artery bypass graft(s) with angina pectoris",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with severe nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Clostridium perfringens [C. perfringens] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Poisoning by cardiac-stimulant glycosides and drugs of similar action intentional self-harm",
                "checked":false
            },
            {
                "disease":"Disorders of newborn related to short gestation and low birth weight not elsewhere classified",
                "checked":false
            },
            {
                "disease":"disease of the circulatory system complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus [HIV] disease complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Direct infection of right ankle and foot in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with proliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"disease of the skin and subcutaneous tissue complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Alzheimer's disease with late onset",
                "checked":false
            },
            {
                "disease":"Direct infection of elbow in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of autologous vein coronary artery bypass graft(s) with angina pectoris with documented spasm",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with hyperosmolarity without nonketotic hyperglycemic-hyperosmolar coma (NKHHC)",
                "checked":false
            },
            {
                "disease":"Rheumatoid polyneuropathy with rheumatoid arthritis of left wrist",
                "checked":false
            },
            {
                "disease":"Intraoperative and postprocedural complications and disorders of musculoskeletal system not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Cervical disc disorder with myelopathy  high cervical region",
                "checked":false
            },
            {
                "disease":"Rupture of cardiac wall without hemopericardium as current complication following acute myocardial infarction",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus type 2 [HIV 2] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with proliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart and chronic kidney disease complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of native coronary artery of transplanted heart with angina pectoris with documented spasm",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of native coronary artery of transplanted heart with angina pectoris",
                "checked":false
            },
            {
                "disease":"Postprocedural endocrine and metabolic complications and disorders not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Pseudomonas (aeruginosa) (mallei) (pseudomallei) as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of lip",
                "checked":false
            },
            {
                "disease":"Encounter for adjustment and management of automatic implantable cardiac defibrillator",
                "checked":false
            },
            {
                "disease":"Direct infection of ankle and foot in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid heart disease with rheumatoid arthritis of hip",
                "checked":false
            },
            {
                "disease":"Poisoning by cardiac-stimulant glycosides and drugs of similar action accidental (unintentional)",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive heart and chronic kidney disease complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"disease of the nervous system complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with hyperosmolarity without nonketotic hyperglycemic-hyperosmolar coma (NKHHC)",
                "checked":false
            },
            {
                "disease":"Intraoperative and postprocedural complications and disorders of digestive system not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Postprocedural hemorrhage and hematoma of a circulatory system organ or structure following a cardiac catheterization",
                "checked":false
            },
            {
                "disease":"Poisoning by phenothiazine antipsychotics and neuroleptics accidental (unintentional)",
                "checked":false
            },
            {
                "disease":"Hallucinogen abuse with hallucinogen-induced psychotic disorder",
                "checked":false
            },
            {
                "disease":"Disorders of phosphorus metabolism and phosphatases",
                "checked":false
            },
            {
                "disease":"Gout due to renal impairment wrist",
                "checked":false
            },
            {
                "disease":"Thoracic thoracolumbar and lumbosacral intervertebral disc disorders with radiculopathy",
                "checked":false
            },
            {
                "disease":"Chronic total occlusion of coronary artery",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with proliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Sedative hypnotic or anxiolytic abuse with sedative hypnotic or anxiolytic-induced psychotic disorder with delusions",
                "checked":false
            },
            {
                "disease":"Poisoning by adverse effect of and underdosing of psychotropic drugs not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Osteonecrosis in disease classified elsewhere right shoulder",
                "checked":false
            },
            {
                "disease":"Direct infection of left hand in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Acoustic neuritis in infectious and parasitic disease classified elsewhere left ear",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with moderate nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Antepartum hemorrhage with disseminated intravascular coagulation first trimester",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of autologous artery coronary artery bypass graft(s) with unstable angina pectoris",
                "checked":false
            },
            {
                "disease":"Chagas' disease (chronic) with digestive system involvement",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of bypass graft of coronary artery of transplanted heart with angina pectoris with documented spasm",
                "checked":false
            },
            {
                "disease":"Pre-existing hypertensive chronic kidney disease complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Direct infection of left shoulder in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid vasculitis with rheumatoid arthritis",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus [HIV] disease complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"Endocrine nutritional and metabolic disease complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with neurological complications with diabetic amyotrophy",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic neuropathic arthropathy",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Direct infection of shoulder joint in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with diabetic neuropathic arthropathy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of subglottis",
                "checked":false
            },
            {
                "disease":"Streptococcus Staphylococcus and Enterococcus as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"disease of the skin and subcutaneous tissue complicating pregnancy second trimester",
                "checked":false
            },
            {
                "disease":"Sedative hypnotic or anxiolytic abuse with sedative hypnotic or anxiolytic-induced mood disorder",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of peripheral nerves and autonomic nervous system of face head and neck",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus [HIV] disease complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with moderate nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with proliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"disease of the skin and subcutaneous tissue complicating pregnancy third trimester",
                "checked":false
            },
            {
                "disease":"ST elevation (STEMI) myocardial infarction involving left circumflex coronary artery",
                "checked":false
            },
            {
                "disease":"Direct infection of left hip in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Type 1 diabetes mellitus with moderate nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Acute megakaryoblastic leukemia not having achieved remission",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with severe nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Methicillin resistant Staphylococcus aureus infection as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of left elbow without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Chronic pulmonary edema",
                "checked":false
            },
            {
                "disease":"Hairy cell leukemia in relapse",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with diabetic peripheral angiopathy without gangrene",
                "checked":false
            },
            {
                "disease":"Intraoperative and postprocedural complications and disorders of genitourinary system not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Secondary malignant neoplasm of mediastinum",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of left hand without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Intraoperative hemorrhage and hematoma of a circulatory system organ or structure complicating a cardiac catheterization",
                "checked":false
            },
            {
                "disease":"Inhalant abuse with inhalant-induced psychotic disorder with hallucinations",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of right hand without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with moderate nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Caisson disease [decompression sickness]",
                "checked":false
            },
            {
                "disease":"Influenza due to identified novel influenza A virus with gastrointestinal manifestations",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of right knee without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Human immunodeficiency virus [HIV] disease complicating pregnancy childbirth and the puerperium",
                "checked":false
            },
            {
                "disease":"Disorders of optic nerve not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Miscellaneous cardiovascular devices associated with adverse incidents not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Deformity of bilateral orbits due to bone disease",
                "checked":false
            },
            {
                "disease":"Corneal disorder due to contact lens right eye",
                "checked":false
            },
            {
                "disease":"Toxic liver disease with chronic active hepatitis without ascites",
                "checked":false
            },
            {
                "disease":"Human T-cell lymphotrophic virus type II [HTLV-II] as the cause of disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of peripheral nerves and autonomic nervous system upper limb including shoulder",
                "checked":false
            },
            {
                "disease":"Direct infection of right elbow in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Obsessive-compulsive personality disorder",
                "checked":false
            },
            {
                "disease":"disease of the skin and subcutaneous tissue complicating pregnancy first trimester",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of peripheral nerves of head face and neck",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with hyperosmolarity",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with proliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy with macular edema",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of right upper limb including shoulder",
                "checked":false
            },
            {
                "disease":"Poisoning by adverse effect of and underdosing of narcotics and psychodysleptics [hallucinogens]",
                "checked":false
            },
            {
                "disease":"Intraoperative hemorrhage and hematoma of a circulatory system organ or structure complicating a cardiac bypass",
                "checked":false
            },
            {
                "disease":"Gestational diabetes mellitus in pregnancy diet controlled",
                "checked":false
            },
            {
                "disease":"ST elevation (STEMI) myocardial infarction involving left anterior descending coronary artery",
                "checked":false
            },
            {
                "disease":"Diverticular disease of both small and large intestine without perforation or abscess",
                "checked":false
            },
            {
                "disease":"Sedative hypnotic or anxiolytic abuse with sedative hypnotic or anxiolytic-induced anxiety disorder",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of knee without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Rheumatoid arthritis with rheumatoid factor of right ankle and foot without organ or systems involvement",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with diabetic peripheral angiopathy without gangrene",
                "checked":false
            },
            {
                "disease":"Hydroxyapatite deposition disease right hand",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of left upper limb including shoulder",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of sphenoid sinus",
                "checked":false
            },
            {
                "disease":"Intraoperative and postprocedural complications and disorders of respiratory system not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with mild nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of rectum",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of connective and soft tissue of right lower limb including hip",
                "checked":false
            },
            {
                "disease":"Osteopathy in disease classified elsewhere left lower leg",
                "checked":false
            },
            {
                "disease":"Intraoperative and postprocedural complications and disorders of circulatory system not elsewhere classified",
                "checked":false
            },
            {
                "disease":"Diabetes mellitus due to underlying condition with moderate nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Delusional disorders",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with mild nonproliferative diabetic retinopathy without macular edema",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of left lower limb",
                "checked":false
            },
            {
                "disease":"Malignant neoplasm of duodenum",
                "checked":false
            },
            {
                "disease":"Benign neoplasm of peripheral nerves and autonomic nervous system of lower limb including hip",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with moderate nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Drug or chemical induced diabetes mellitus with mild nonproliferative diabetic retinopathy",
                "checked":false
            },
            {
                "disease":"Acute monoblastic/monocytic leukemia",
                "checked":false
            },
            {
                "disease":"Direct infection of wrist in infectious and parasitic disease classified elsewhere",
                "checked":false
            },
            {
                "disease":"Atherosclerosis of coronary artery bypass graft(s) and coronary artery of transplanted heart with angina pectoris",
                "checked":false
            },
            {
                "disease":"Antepartum hemorrhage with disseminated intravascular coagulation third trimester",
                "checked":false
            },
            {
                "disease":"Direct infection of right shoulder in infectious and parasitic disease classified elsewhere",
                "checked":false
            }
        ];

        return {

            getCohortList: function () {
                return $http.get(url+"Cohorts");
            },

            getPatientsList: function(cohort_id){

                return $http.get(url+"Cohorts/" +cohort_id);
            },

            deleteCohort: function (cohort) {
                $http.delete(url+ "Cohorts/" + cohort._id);

            },

            getDiseaseList:function(){
                return diseases;
            },

            getInputCities: function () {

                return cities;
            },
            postFilters: function(JSONObj){
                return $http.post(url+"Filters", JSONObj);
            },
            getPatient:function(patientID){
                return $http.get(url+"Patients?PatientID="+patientID);
            },
            
            getGraph:function(diseaseJSON){

                var temp;
                $http.post(url+"Disease",diseaseJSON).then(function(response){

                    return $http.post(url+"Graph",response.data);
                    /*temp=response.data;
                    console.log("Temp: "+angular.toJson(temp));
*/
                });


            }
        };
    });