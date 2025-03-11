import { createRoot } from "react-dom/client";
import './app.css'
import { StrictMode } from "react";
// App bileşeninin render edileceği root elementini seçiyoruz
const rootElement = document.querySelector("#root");

const App = () => {
    return (
        <div className="content">
            <Header />
            <TeamMembers />
        </div>
    );
};

const teamMembersData = [
    {
        name: "Chris Coyier",
        description: "Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.",
        image: "https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120",
        codepenLink: "https://codepen.io/chriscoyier/",
        codepenName: "@chriscoyier",
        isCofunder: true
    },
    {
        name: "Alex Vazquez",
        description: "Alex is a full stack developer. Alex does JavaScript development for CodePen, both front end and back, and just about everything else.",
        image: "https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120",
        codepenLink: "https://codepen.io/quezo/",
        codepenName: "@quezo",
        isCofunder: true
    },
    {
        name: "Marie Mosley",
        description: "Marie wears a lot of hats. She is our documentation lead, customer support maestra, editor, and community manager.",
        image: "https://assets.codepen.io/652/internal/avatars/users/default.png?height=120&width=120",
        codepenLink: "https://codepen.io/mariemosley/",
        codepenName: "@mariemosley",
        isCofunder: false
    },
    {
        name: "Stephen Shaw",
        description: "Stephen is a designer/developer residing in Houston. He likes to build animations with CSS & JavaScript.",
        image: "https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120",
        codepenLink: "https://codepen.io/shshaw/",
        codepenName: "@shshaw",
        isCofunder: false
    },
]

function Header() {

    return (
        <div className="title">
            <h1>TEAM</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    );
}

function TeamMembers() {
    return (
        <ul className="team">
            {/* <TeamMember 
                name="Chris Coyier"
                description="Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen."
                image="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120"
                codepenLink="https://codepen.io/chriscoyier/"
                codepenName="@chriscoyier"
                isCofunder={true}
            
            /> */}
            {
                teamMembersData.map((member) => (
                    <TeamMember
                        key={member.name}
                        name={member.name}
                        description={member.description}
                        image={member.image}
                        codepenLink={member.codepenLink}
                        codepenName={member.codepenName}
                        isCofunder={member.isCofunder}

                    />

                ))
            }

        </ul>
    );
}

function TeamMember(props) {
    // <li className="member co-funder">
    return (
        <li className={`member ${props.isCofunder?  "co-funder":""}`}>
            <div className="thumb">
                <img
                    src={props.image}
                    alt="User Avatar"
                />
            </div>
            <div className="description">
                <h3>{props.name}r</h3>
                <p>
                    {props.description}
                    <br />
                    <a href={props.codepenLink}>{props.codepenName}</a>
                </p>
            </div>
        </li>
    );
}

// React uygulamasını render ediyoruz
createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
