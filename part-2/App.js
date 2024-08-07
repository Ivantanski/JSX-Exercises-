function App() {
    return (
        <div> 
            <Tweet 
            name = 'George Smith'
            username = "Gsmith"
            date={new Date(). toDateString()}
            message="This app will disrupt everything!!"
            />

            <Tweet 
            name="Angela Smith"
            username="Asmith"
            date={new Date().toDateString()}
            message="!Iloveexclamationmark" 
            /> 
            <Tweet 
            name="Peter Smith"
            username="Psmith"
            date={new Date().toDateString()}
            message="Follow me!" />




        </div>
    );
}