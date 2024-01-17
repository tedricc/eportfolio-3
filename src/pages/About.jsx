import { OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import Clouds from "../assets/clouds.png";

import { AnimatedHeader } from "../components/AnimateHeader";

const about = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "GitHub",
  "NPM",
  "Yarn",
  "ThreeJS",
  "Context",
  "React",
  "Redux",
  "State Management",
  "Vue",
  "AWS",
  "CSS frameworks",
  "Web Widgets",
  "Wordpress",
];

function randomSkill() {
  return about[Math.floor(Math.random() * about.length)];
}

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "inherit",
    fontSize: 1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);

    ref.current.material.color.lerp(
      color.set(hovered ? "#f70042" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          randomSkill(),
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

function About() {
  return (
    <div className="container" id="about">
      <div className="about__wrapper" data-aos="fade-down" data-aos-delay="50">
        <div className="about__left playfair">
          I'm a highly motivated software engineer with a strong passion for
          website development.
        </div>
        <div className="about__right lato">
          Currently employed as a software engineer at Canva, I work on
          extremely difficult engineering problems every day in a team
          consisting of some of the most talented and experienced software
          engineers.
          <br />
          <br />
          Continuously working towards improving my knowledge and skills to
          develop technologies that contribute to the betterment of society.
        </div>
      </div>
      <img id="clouds" src={Clouds} />
    </div>
  );
}

export default About;
