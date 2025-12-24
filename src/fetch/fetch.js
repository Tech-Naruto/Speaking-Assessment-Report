async function getAssessmentData() {
    try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        console.log("Assessment Data:", data);
        return data; 
    } catch (error) {
        console.error("Error loading assessment data:", error);
        return null;
    }
}

export { getAssessmentData };