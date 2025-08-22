📂 File Sorter

A simple and efficient Node.js script that automatically organizes files in a directory by their file extensions.

This tool helps you keep your folders clean and structured by moving files into extension-based subfolders (e.g., .png files go into a png folder).

✨ Features

✅ Automatically detects file extensions.

✅ Creates new folders based on extensions.

✅ Moves files into the correct folders.

✅ Skips .js and .json files (keeps your code intact).

✅ Lightweight and fast — no dependencies.

📦 Installation

Make sure you have Node.js installed.
Check by running:

node -v


Clone or download this repository.

Place your files inside the folder you want to organize (update the basepath in the script if needed).

🚀 Usage

Run the script with:

node index.js


This will:

Create new folders for each extension.

Move files into their respective folders.

Leave .js and .json files untouched.

📂 Example

Before:

📁 lectures
 ┣━ notes.txt  
 ┣━ image.png  
 ┣━ data.csv  
 ┣━ app.js  
 ┗━ config.json  


After running node index.js:

📁 lectures
 ┣━ 📁 txt
 │   ┗━ notes.txt
 ┣━ 📁 png
 │   ┗━ image.png
 ┣━ 📁 csv
 │   ┗━ data.csv
 ┣━ app.js
 ┗━ config.json

⚙️ Configuration

In the script, update the basepath variable to point to the folder you want to organize:

const basepath = "c:/lectures/vid 91 and 93"

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.
