# React 3D Test

This web app has been developed, keeping in mind, the guidelines set down in the document provided along with the data.

The primary objectives of this application are to achieve the following:

-   Showcase a 3D Model in the browser with animation
-   Explain any interactions with the 3D object in the code

The current solution tries to achieve the above goals in the best possible way within the available timeframe.

## Installation

To install this app locally, extract the project files to a directory of your choice and run the following commands to install all dependencies and start the app. Note that the app uses [PNPM](https://pnpm.io/):

```bash
cd installation_directory
pnpm i
pnpm dev
```

## Tech Stack

### Dependencies

The app uses the following dependencies:

-   React
-   React-Three-Fiber
-   Typescript
-   Vite bundler

## Application Walkthrough

This app is available at [react-3d-test.netlify.app](https://react-3d-test.netlify.app)

On page load, a 3D model of a windmill, downloaded from [sketchfab]('https://sketchfab.com/3d-models/wind-turbine-285032402a8543ae8bf3e3c4d8c9f98a') is shown on screen.

The model can be interacted with by using the mouse or through touch controls.

It can be spun around as required and, on hover, the section being hovered on, will be highlighted.

Below the model, there are 3 controls:

1. **Toggle Turning On Axis** - This button toggles the rotation of the entire 3D model.
2. **Stop Blades Turning** - The blades on the model are spinning by default. Clicking this button at any point will stop the blades and also reset the next control.
3. **Blade Speed** - This slider controls the speed of rotation of the blades in ten steps.
