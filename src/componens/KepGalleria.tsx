export function KepGalleria() {
    return <>
    <section className="mb-5">
            <h2>Képgaléria</h2>
            <div className="row">
                <div className="col-sm-4">
                    <img className="img-fluid" alt="Kosárlabda játékosok a pályán, labdával a levegőben" title="Kosárlabda játék pillanat" src="public\basketball.jpg"></img>
                </div>
                <div className="col-sm-4">
                    <img className="img-fluid" alt="Egy női sportoló fut, beltéri futópályán" title="Futó edzés közben." src="public/running.jpeg"></img>
                </div>
                <div className="col-sm-4">
                    <img className="img-fluid" alt="Úszó a medencében, fekete úszósapkában" title="Pillangó úszás közben." src="public/swimming.jpg"></img>
                </div>
            </div>
        </section>
    </>
}