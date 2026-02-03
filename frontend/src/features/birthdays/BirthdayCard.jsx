export default function BirthdayCard({person}){
    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            <figure>
                <img src={person.image} className="img-fluid" alt="" />
                <figcaption>
                    {person.date} - {person.name} | <strong>{person.department}</strong>
                </figcaption>
                <p>
                    <a href={`malito:${person.email}?subject=Feliz Aniversário`}></a>
                </p>
            </figure>
        </div>
    )
}