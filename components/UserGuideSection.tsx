"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

// Define tab names
type TabKey = "benefits" | "factors" | "requirements" | "model" | "challenges" | "comparison" | "communication";

// Type the tab content object
interface TabData {
  title: string;
  description: string;
  points: string[];
}

export default function UserGuideSection() {
  const tabContent: Record<TabKey, TabData> = {
    benefits: {
      title: "Benefits of Hiring Developers",
      description: "Discover key advantages and cost benefits",
      points: [
        "Cost-effective solution compared to in-house teams",
        "Access to specialized skills and expertise",
        "Faster time-to-market for your products",
        "Scalable team size based on project requirements",
        "Focus on core business while experts handle development",
      ],
    },
    factors: {
      title: "Key Factors to Consider While Hiring",
      description: "Understand the main aspects before hiring developers",
      points: [
        "Define your budget and timeline",
        "Check developer’s portfolio",
        "Review technical skills and experience",
        "Assess communication abilities",
        "Consider cultural fit and time zones",
      ],
    },
    requirements: {
      title: "Defining Your Project Requirements",
      description: "Clearly outline goals before hiring developers",
      points: [
        "Identify core functionalities",
        "Select target platforms",
        "Determine tech stack requirements",
        "Set milestones and deliverables",
        "Align business goals with development roadmap",
      ],
    },
    model: {
      title: "Choosing the Right Development Model",
      description: "Pick the best engagement model for your needs",
      points: [
        "Dedicated development team model",
        "Fixed-price project model",
        "Time & materials model",
        "Hybrid engagement approach",
        "Outstaffing vs outsourcing",
      ],
    },
    challenges: {
      title: "Typical Challenges for Hiring Developers",
      description: "Overcome common hiring and project pitfalls",
      points: [
        "Finding qualified candidates",
        "Time zone differences",
        "Communication gaps",
        "Cost overruns",
        "Unclear project requirements",
      ],
    },
    comparison: {
      title: "Hiring Freelancers vs. Dedicated Developers",
      description: "Weigh the pros and cons of each option",
      points: [
        "Freelancers offer flexibility but less commitment",
        "Dedicated teams provide full focus",
        "Freelancers may lack long-term availability",
        "Dedicated teams ensure consistency",
        "Cost differences between both models",
      ],
    },
    communication: {
      title: "Communication with Remote Developers",
      description: "Best practices to ensure smooth collaboration",
      points: [
        "Use clear and concise instructions",
        "Leverage project management tools",
        "Hold regular video meetings",
        "Set response time expectations",
        "Document all major decisions",
      ],
    },
  };

  const [activeTab, setActiveTab] = useState<TabKey>("benefits");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-gray-900 mb-4 leading-tight">
            User Guide To Hire Dedicated Software Developers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about hiring and managing dedicated development teams
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            {(
              [
                { key: "benefits", label: "Benefits of Hiring Developers", sub: "Discover key advantages" },
                { key: "factors", label: "Key Factors to Consider", sub: "Understand main aspects" },
                { key: "requirements", label: "Defining Project Requirements", sub: "Outline project goals" },
                { key: "model", label: "Choosing the Right Model", sub: "Pick engagement approach" },
                { key: "challenges", label: "Typical Challenges", sub: "Avoid common pitfalls" },
                { key: "comparison", label: "Freelancers vs Dedicated", sub: "Compare hiring options" },
                { key: "communication", label: "Communication with Remote Developers", sub: "Ensure collaboration" },
              ] as { key: TabKey; label: string; sub: string }[]
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-left p-5 border-b transition-all ${
                  activeTab === tab.key
                    ? "border-teal bg-[#2FC980] text-[#fff] shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm text-black"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-lg">{tab.label}</h4>
                  </div>
                  {/* <div className={`w-3 h-3 rounded-full ${activeTab === tab.key ? "bg-teal-500" : "bg-gray-300"}`} /> */}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-4">{tabContent[activeTab].title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{tabContent[activeTab].description}</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {tabContent[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <img src="assets/images/tab.png" alt="Developers in India" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
