import React from "react";
import '../../index.css';
import '../../styles.scss';
import useScrollReveal from "../useScrollReveal";

const values = [
    { title: "Safety", description: "We put safety first on priority", icon: "🛡️" },
    { title: "Customer", description: "Customer is at the center of everything we do", icon: "👥" },
    { title: "Employees", description: "We build careers, we value, challenge and reward people", icon: "💼" },
    { title: "Ownership", description: "If it has to happen, it's up to me", icon: "🔑" },
    { title: "Team Work", description: "Simply stated, it’s less ‘me’ and more ‘we’", icon: "🤝" },
    { title: "Excellence", description: "We thrive to excel in everything we do", icon: "🏆" },
    { title: "Integrity", description: "We take it as the first step to true greatness", icon: "🌟" },
    { title: "Learning", description: "Learn, Unlearn, Relearn", icon: "📚" },
];

const GoalsValues = () => {
    useScrollReveal();
    return (
        <div className="container reveal">
            <h2 className="value-system-title">Our Value System</h2>
            <div className="row">
                {values.map((value, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <div className="value-item">
                            <div className="icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GoalsValues;
