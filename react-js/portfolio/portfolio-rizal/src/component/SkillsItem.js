function SkillsItem (props){
    return(
        <div class="col-6 mt-3  ms-auto">
            <div class="card text-dark p-4">
                <div class="card-body">
                    <h5 class="card-title">{props.judul}</h5>
                    <p class="card-text">{props.deskripsi}</p>
                </div>
            </div>
        </div>
    );
}

export default SkillsItem