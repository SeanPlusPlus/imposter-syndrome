const fs = require("fs");
const path = require("path");

// Directory containing the .md files
const inputDir = "./_posts"; 
const outputFile = "public/chapters.md";

function concatenateMarkdownFiles(inputDir, outputFile) {
  try {
    // Read all files in the directory
    const files = fs.readdirSync(inputDir)
      .filter(file => file.endsWith(".md"))
      .sort(); // Sort to maintain order

    if (files.length === 0) {
      console.log("No Markdown files found.");
      return;
    }

    let combinedContent = files.map(file => {
      const filePath = path.join(inputDir, file);
      const content = fs.readFileSync(filePath, "utf8");
      return `# ${file}\n\n${content}\n\n---\n\n`; // Add filename as header and a separator
    }).join("");

    // Write to output file
    fs.writeFileSync(outputFile, combinedContent, "utf8");
    console.log(`Successfully created ${outputFile} with ${files.length} files.`);
  } catch (error) {
    console.error("Error processing files:", error);
  }
}

// Run the function
concatenateMarkdownFiles(inputDir, outputFile);
