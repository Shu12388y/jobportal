"use client";
import React from "react";
import { X } from "lucide-react";

export default function PostJob() {
  const [skills, setSkills] = React.useState([]);
  const [skillInput, setSkillInput] = React.useState("");
  const [budgetType, setBudgetType] = React.useState("fixed");

  const addSkill = (e:React.HTMLAttributes) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
      }
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove:string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-zinc-900 mb-2">
            Post a job
          </h1>
          <p className="text-zinc-600">
            Fill in the details to find the right person for your project
          </p>
        </div>

        <form className="space-y-8">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-zinc-900 mb-2"
            >
              Job title
            </label>
            <input
              type="text"
              id="title"
              placeholder="e.g. Senior React Developer"
              className="w-full px-4 py-2.5 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-zinc-900 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={8}
              placeholder="Describe what you're looking for..."
              className="w-full px-4 py-2.5 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent resize-none"
            />
            <p className="text-sm text-zinc-500 mt-2">
              Be specific about the work, deliverables, and timeline
            </p>
          </div>

          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-zinc-900 mb-2"
            >
              Required skills
            </label>
            <div className="space-y-3">
              {skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 text-zinc-900 text-sm rounded-full"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:bg-zinc-200 rounded-full p-0.5 transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <input
                type="text"
                id="skills"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={addSkill}
                placeholder="Type a skill and press Enter"
                className="w-full px-4 py-2.5 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-900 mb-3">
              Budget
            </label>
            <div className="flex gap-4 mb-4">
              <button
                type="button"
                onClick={() => setBudgetType("fixed")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  budgetType === "fixed"
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                Fixed price
              </button>
              <button
                type="button"
                onClick={() => setBudgetType("hourly")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  budgetType === "hourly"
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                Hourly rate
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="minBudget"
                  className="block text-sm text-zinc-600 mb-2"
                >
                  {budgetType === "fixed"
                    ? "Minimum budget"
                    : "Min hourly rate"}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                    $
                  </span>
                  <input
                    type="number"
                    id="minBudget"
                    placeholder="0"
                    className="w-full pl-8 pr-4 py-2.5 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="maxBudget"
                  className="block text-sm text-zinc-600 mb-2"
                >
                  {budgetType === "fixed"
                    ? "Maximum budget"
                    : "Max hourly rate"}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                    $
                  </span>
                  <input
                    type="number"
                    id="maxBudget"
                    placeholder="0"
                    className="w-full pl-8 pr-4 py-2.5 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="px-6 py-2.5 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Post job
            </button>
            <button
              type="button"
              className="px-6 py-2.5 border border-zinc-300 text-zinc-700 font-medium rounded-lg hover:bg-zinc-50 transition-colors"
            >
              Save as draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
