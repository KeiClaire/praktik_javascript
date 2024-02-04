import SkillsItem from "./SkillsItem"

function Skills (){
    return(
        <div id="skills" class="section3 text-light py-5">
            <div class ="container">    
                <h1 class="text-center">Skills</h1>
                <div class="row">
                    <SkillsItem 
                        judul="HTML"
                        deskripsi="Dapat mengelola serangkaian data dan informasi sehingga suatu dokumen dapat ditampilkan di internet melalui layanan web."
                    />
                    <SkillsItem 
                        judul="CSS"
                        deskripsi="Dapat mengatur mulai dari font, warna tulisan dan latar belakang pada website."
                    />
                    <SkillsItem 
                        judul="Javascript"
                        deskripsi="Menciptakan interaksi yang lebih dinamis saat membuat halaman web, aplikasi, server, atau game."
                    />
                    <SkillsItem 
                        judul="Java"
                        deskripsi="Membuat aplikasi berbasis desktop, web, mobile, hingga aplikasi embedded device seperti perangkat pintar/microprosesor."
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills