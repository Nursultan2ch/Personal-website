import "./about.css";
import Award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://avatars.githubusercontent.com/u/98944933?v=4"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I am from country in Central Asia called Kyrgyzstan. During my high school years, I actively participated in various Chemistry Olympiads. However, when got in to university. I decided to change my major to Computer Science. Because I believe that Computer Science is future.
          I am currently new in this field. However, I believe that experience that I will get in your company definitely will help on my way to become professioanl Web developer.
        </p>
        <div className="a-award">
          
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h3>Awards</h3>
            <ul>
              <li className="a-award-title" style={{
        color: "red"}}>Bronze medal in International Chemistry Olympiad 2020</li>
              <li className="a-award-title" style={{
        color: "red"}}>Silver medal in International Mendeleev Chemistry Olympiad 2020</li>
            </ul>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
