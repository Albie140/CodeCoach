import data from "./src/lessonPlan.json";

const newData = data.map((data) => {
    return (
        <div>
            <h1>Lesson Plan</h1>
            <card key={data.id}>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.description}
                    </Card.Text>

                    <h2>Resources</h2>
                    <a className="btn-primary"
                        href={data.url}
                        target="_blank">
                        W3Schools
</a>


                </Card.Body>
            </card>

        </div>
    )
}
)