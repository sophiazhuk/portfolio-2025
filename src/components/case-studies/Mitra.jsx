import React from "react";

const Mitra = () => {
    return (
        <section className="case-study">
            <div className="one-column cover">
                <img src="/images/bellingham-buzz/mobile-home-mock3.png" alt="Wireframes" />
                <div className="case-title">
                    <div className="top-text">Sophia Zhuk</div>
                    <h1>MITRA</h1>
                </div>

                <p>
                    A platform helping locals and visitors discover events, entertainment, and community happenings in Bellingham.
                </p>
            </div>

            <div className="one-column">
                    <h2>Problem</h2>
                    <p>Many students, like ourselves, feel stuck in trying to figure out what to do in Bellingham. Since we arrive at school from all over, many students are unaware of how many amazing businesses work in town. This website is meant to aid students, and help direct them towards new places and try new things.
                    </p>
            </div>
            <div className="one-column">
                <h2>Abstract</h2>
                <p>Directed towards college students but anyone can use to find out where to eat. The goal is an easier way to find info about hours, happy hours, if a place is 21+, noisy or chill, etc.. Users can choose their own adventure to find the perfect itinerary for their night out, or browse through the database to find the place for them.</p>

            </div>

            <div className="one-column cover">
                <img src="/images/bellingham-buzz/mobile-quiz-mock1.png" alt="Wireframes" />
            </div>

            <div className="one-column">
                <div>
                    <h2>Tools</h2>
                    <p>A constriction we had for this project was to learn a new CMS. As we planned on having user contributions and comments, we decided to use Wordpress. With this, I learned how to make custom plugins, edit existing plugins, themes, and templates.</p>
                </div>
            </div>

            <div className="one-column">
                <h2>Usability Tests</h2>
                <p>Conducted qualitative testing to optimize UI for better navigation and engagement. These tests presented the targeted demographic, students, with the website and without guidance, watched how they would use the site. In the end, we would conduct interviews, asking questions like if there were any confusing parts, if there were any features they would like to see, or if they were satisfied with their results. </p>
            </div>
        </section>
    );
};

export default Mitra;
