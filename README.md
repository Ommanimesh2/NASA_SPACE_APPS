# Solar Probe Reimagine

An interactive web application to take you aboard the Parker SOlar Probe. What is Parker Solar Probe? A scientific mission to unlock the mysteries of the Sun's corona and solar wind. It studies the corona and solar winds as it goes around a revolution of 88 days and comes as close to Sun as any spacecraft has ever been.

## Installation and Run

The app is built on `ReactJS`. React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

1. Clone the git repository `git clone https://github.com/Ommanimesh2/NASA_SPACE_APPS.git`
2. Run `npm i` or `npm install` in the terminal to install the node modules
3. To start the server run `npm start` and run the app in development mode at `http://localhost:3000` on your browser.

## How does it work?

The web application uses the data available from NASA's HAPI. It takes the merged data of PSP and the task is to represent most of the data in a visually intuitive way so an amateur can relate to the numbers. Since every data is according to time, it will be the independent value which can be set by the user using a slider. Then according to data we find distance which will decide how big the sun looks to the eyes, solar wind speed which is represented by the particles in the background and magnetic field is represented by number of flux lines. The rest of the data is also presented in a details tab which is toggle-able.

### HAPI

To learn about HAPI go to `https://cdaweb.gsfc.nasa.gov/hapi`.
The data types and info about the dataset we used from HAPI can be found at `https://cdaweb.gsfc.nasa.gov/hapi/info?id=PSP_COHO1HR_MERGED_MAG_PLASMA`.
The dataset can be fetched from `https://cdaweb.gsfc.nasa.gov/hapi/data?id=PSP_COHO1HR_MERGED_MAG_PLASMA&time.min=2018-01-01T00:00:00Z&time.max=2022-03-31T23:00:00Z`.

The data is however stored on the Firestore account and the data is fetched from there so no need to worry about fetching data.
However, since we have limits on number of calls we have a deployable backend for testing at `https://github.com/NanoNish/pspProject.git`.

### WISPR

The images used for display are taken from the database of WISPR. The Wide-Field Imager for Solar Probe (WISPR) is an imaging instrument of the Parker Solar Probe mission to the Sun, launched in August 2018. Imaging targets include visible light images of the corona, solar wind, shocks, solar ejecta, etc.
The dataset can be found at `https://wispr.nrl.navy.mil/data/rel/pngs/`.
These are directly fetched from the above url.
