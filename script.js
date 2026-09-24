// ======================================
// DATA SEMUA JADWAL
// ======================================

const jadwal = [

    // ==================================
    // SENIN
    // ==================================

    {
        hari: "Senin",
        nomor: "01",
        mataKuliah: "Kecerdasan Buatan",
        dosen: "Bu Gayatri, Bu Damar, dan Bu Annisa",
        ruang: "Ruang Kuliah A3.2",
        gedung: "Ilmu Komputer-Gedung 24A",
        mulai: "09:40",
        selesai: "11:30"
    },


    {
        hari: "Senin",
        nomor: "02",
        mataKuliah: "Analisa dan Desain Perangkat Lunak",
        dosen: "Pak Doni",
        ruang: "Ruang Kuliah B2",
        gedung: "UPT Perpustakaan-Gedung 24B",
        mulai: "11:30",
        selesai: "13:20"
    },


    {
        hari: "Senin",
        nomor: "03",
        mataKuliah: "Manajemen Keamanan Sistem Informasi",
        dosen: "Pak Rizki",
        ruang: "Ruang Kuliah A3.2",
        gedung: "Ilmu Komputer-Gedung 24A",
        mulai: "15:10",
        selesai: "17:00"
    },


    {
        hari: "Senin",
        nomor: "04",
        mataKuliah: "Analisa dan Desain Perangkat Lunak",
        dosen: "Asisten Praktikum",
        ruang: "Ruang Kuliah B1",
        gedung: "UPT Perpustakaan-Gedung 24B",
        mulai: "18:00",
        selesai: "20:40"
    },


    // ==================================
    // SELASA
    // ==================================

    {
        hari: "Selasa",
        nomor: "01",
        mataKuliah: "Pemrograman Fungsional",
        dosen: "Pak Dony",
        ruang: "Ruang Kuliah A3.2",
        gedung: "Ilmu Komputer-Gedung 24A",
        mulai: "07:00",
        selesai: "08:40"
    },


    {
        hari: "Selasa",
        nomor: "02",
        mataKuliah: "Pertanian Industrial Berkelanjutan",
        dosen: "Prof Tantut",
        ruang: "R.KUL C601",
        gedung: "Cluster 24-CDAST SELATAN",
        mulai: "10:40",
        selesai: "12:20"
    },


    // ==================================
    // RABU
    // ==================================

    {
        hari: "Rabu",
        nomor: "01",
        mataKuliah: "Arsitektur Komputer",
        dosen: "Pak Fadel",
        ruang: "Ruang Kuliah C 2.2",
        gedung: "Ilmu Komputer-Gedung 24C",
        mulai: "07:00",
        selesai: "08:40"
    },


    {
        hari: "Rabu",
        nomor: "02",
        mataKuliah: "Pemrograman Berbasis Website",
        dosen: "Pak Andryan dan Pak Gama",
        ruang: "Ruang Kuliah C 2.3",
        gedung: "Ilmu Komputer-Gedung 24C",
        mulai: "10:40",
        selesai: "12:20"
    },


    // ==================================
    // KAMIS
    // ==================================

    {
        hari: "Kamis",
        nomor: "01",
        mataKuliah: "Grafika Komputer",
        dosen: "Pak Gama",
        ruang: "Ruang Kuliah C 2.2",
        gedung: "Ilmu Komputer-Gedung 24C",
        mulai: "08:50",
        selesai: "10:30"
    },


    {
        hari: "Kamis",
        nomor: "02",
        mataKuliah: "Pemrograman Berorientasi Obyek",
        dosen: "Pak Briyan",
        ruang: "Ruang Kuliah B2",
        gedung: "UPT Perpustakaan-Gedung 24B",
        mulai: "12:30",
        selesai: "15:10"
    },


    // ==================================
    // JUMAT
    // ==================================

    {
        hari: "Jumat",
        nomor: "01",
        mataKuliah: "Pemrograman Berorientasi Obyek",
        dosen: "Asisten Praktikum",
        ruang: "Ruang Kuliah C 2.2",
        gedung: "Ilmu Komputer-Gedung 24C",
        mulai: "07:00",
        selesai: "09:40"
    },


    {
        hari: "Jumat",
        nomor: "02",
        mataKuliah: "Grafika Komputer",
        dosen: "Asisten Praktikum",
        ruang: "Ruang Kuliah C 2.2",
        gedung: "Ilmu Komputer-Gedung 24C",
        mulai: "12:30",
        selesai: "15:10"
    },


    {
        hari: "Jumat",
        nomor: "03",
        mataKuliah: "Kecerdasan Buatan",
        dosen: "Asisten Praktikum",
        ruang: "Ruang Kuliah A3.4",
        gedung: "Ilmu Komputer-Gedung 24A",
        mulai: "15:10",
        selesai: "17:50"
    },


    {
        hari: "Jumat",
        nomor: "04",
        mataKuliah: "Pemrograman Berbasis Website",
        dosen: "Asisten Praktikum",
        ruang: "Ruang Kuliah A3.2",
        gedung: "Ilmu Komputer-Gedung 24A",
        mulai: "18:00",
        selesai: "20:40"
    }

];



// ======================================
// URUTAN HARI
// ======================================

const urutanHari = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat"
];



// ======================================
// TEMPAT MENAMPILKAN JADWAL
// ======================================

const scheduleList =
    document.getElementById("scheduleList");



// ======================================
// MENAMPILKAN SEMUA JADWAL
// ======================================

function tampilkanJadwal(hariDipilih = "Semua") {

    // Mengosongkan daftar sebelumnya
    scheduleList.innerHTML = "";


    // Perulangan berdasarkan urutan hari
    urutanHari.forEach(function(hari) {


        // Jika memilih hari tertentu
        if (
            hariDipilih !== "Semua" &&
            hariDipilih !== hari
        ) {

            return;

        }


        // Mengambil jadwal sesuai hari
        const jadwalHari = jadwal.filter(
            function(item) {

                return item.hari === hari;

            }
        );


        // Kalau tidak ada jadwal
        if (jadwalHari.length === 0) {

            return;

        }


        // ==================================
        // MEMBUAT KELOMPOK HARI
        // ==================================

        const dayGroup =
            document.createElement("div");

        dayGroup.className = "day-group";

        dayGroup.dataset.day = hari;



        // ==================================
        // HEADER HARI
        // ==================================

        const dayHeader =
            document.createElement("div");

        dayHeader.className = "day-header";


        dayHeader.innerHTML = `

            <div class="day-icon">
                📅
            </div>

            <div>

                <p>
                    HARI
                </p>

                <h3>
                    ${hari.toUpperCase()}
                </h3>

            </div>

        `;


        dayGroup.appendChild(dayHeader);



        // ==================================
        // COURSE LIST
        // ==================================

        const courseList =
            document.createElement("div");

        courseList.className = "course-list";



        // ==================================
        // MEMBUAT CARD MATA KULIAH
        // ==================================

        jadwalHari.forEach(function(item) {


            const courseCard =
                document.createElement("div");

            courseCard.className =
                "course-card";


            courseCard.innerHTML = `

                <div class="course-number">

                    ${item.nomor}

                </div>


                <div class="schedule-info">

                    <h3>

                        ${item.mataKuliah}

                    </h3>


                    <p class="dosen">

                        👨‍🏫 ${item.dosen}

                    </p>


                    <p>

                        📍 ${item.ruang}

                    </p>


                    <p>

                        🏫 ${item.gedung}

                    </p>

                </div>


                <div class="time">

                    ${item.mulai}

                    <span>

                        - ${item.selesai} WIB

                    </span>

                </div>

            `;


            courseList.appendChild(
                courseCard
            );

        });



        dayGroup.appendChild(courseList);


        scheduleList.appendChild(dayGroup);

    });

}



// ======================================
// FILTER JADWAL
// ======================================


// Mengambil semua tombol filter

const filterButtons =
    document.querySelectorAll(".filter-btn");


// Perulangan setiap tombol

filterButtons.forEach(function(button) {


    button.addEventListener(
        "click",
        function() {


            // Mengambil hari
            const selectedDay =
                button.dataset.day;



            // Menghapus active
            // dari semua tombol

            filterButtons.forEach(
                function(btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );



            // Memberikan active
            // ke tombol yang dipilih

            button.classList.add("active");



            // Menampilkan jadwal

            tampilkanJadwal(
                selectedDay
            );

        }
    );

});



// ======================================
// DARK MODE / LIGHT MODE
// ======================================

const themeBtn =
    document.getElementById("themeBtn");



themeBtn.addEventListener(
    "click",
    function() {


        // Mengaktifkan /
        // menonaktifkan light mode

        document.body.classList.toggle(
            "light"
        );



        // Mengecek mode

        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeBtn.textContent = "🌙";

        }

        else {

            themeBtn.textContent = "☀";

        }

    }
);



// ======================================
// MENAMPILKAN JADWAL
// SAAT WEBSITE DIBUKA
// ======================================

tampilkanJadwal();