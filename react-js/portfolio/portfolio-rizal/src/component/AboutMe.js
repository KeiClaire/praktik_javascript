import foto from './foto.jpg'

function AboutMe() {
    return(
        <div id="abtme" class="section2">
            <div class="row align-items-center">
                <div class="col-6 text-center">
                    <div class="foto">
                        <img src={foto}/>   
                    </div>
                </div>
                <div class="col-6">
                    <div>
                    <h2>About Me</h2>
                        <p>
                            Halooo, nama saya Rizal Dwi Ristiadi, saya lahir di <br></br>
                            Kecamatan Sangkulirang (Kutai Timur) pada 13 Juli 2007.
                        </p>
                        <p>
                            Sekarang saya sekolah di SMKTI Airlangga Samarinda. Saya masuk <br></br>
                            jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). 
                            Dan saya sekarang kelas XI (sebelas).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe