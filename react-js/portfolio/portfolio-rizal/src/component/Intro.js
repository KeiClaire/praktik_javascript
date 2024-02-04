import foto from './foto.jpg'

function Intro() {
    return(
        <div class="section1 text-light">
            <div class="container">
                <div>
                <h1 class="intro-1">Hi There! I'm</h1>
                <p class="intro-2"><b>Rizal Dwi Ristiadi, a  <br></br> Student at SMKTI Airlangga</b></p>
                <a target="_blank" href="https://wa.me/6285753525893"><button type="button" class="btn btn-outline-light">CONTACT US</button></a>
                </div>
                <div class="foto">
                    <img src={foto}/>   
                </div>
            </div>
        </div>
    )
}

export default Intro