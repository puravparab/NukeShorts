# NukeShorts

A web extension that disables YouTube Shorts.

## Installation

There are two ways to install NukeShorts:

### 1. From the Pre-built Zip (Easiest)

1.  Download the extension's `.zip` file from the [latest release](https://github.com/your-username/nukeshorts/releases) on GitHub.
2.  Unzip the file.
3.  Open Chrome and navigate to `chrome://extensions`.
4.  Enable "Developer mode".
5.  Click "Load unpacked" and select the unzipped directory.

### 2. Building from Source

If you prefer to build the extension yourself, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/nukeshorts.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd nukeshorts
    ```
3.  Install the dependencies using `bun`:
    ```bash
    bun install
    ```
4.  Build the extension:
    ```bash
    bun run build
    ```
5.  Open Chrome and navigate to `chrome://extensions`.
6.  Enable "Developer mode".
7.  Click "Load unpacked" and select the `dist` directory.

## How It Works

NukeShorts does two things:

*   It injects CSS to hide all Shorts-related components from the YouTube UI.
*   It intercepts any navigation to a `/shorts/` URL and redirects you to the YouTube homepage.
