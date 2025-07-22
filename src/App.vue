<template>
  <v-app class="d-flex flex-column">
    <v-main class="flex-grow-1 relative-container">
      <div class="background-blur-overlay"></div>

      <div class="main-scroll-area">
        <div class="hero-section d-flex flex-column justify-center align-center">
          <div class="hero-text">
            <h1>Niel Botes</h1>
            <h2>Junior full-stack developer</h2>
          </div>
        </div>

        <v-card class="scrollable-content-card mx-auto" flat tile>
          <v-container fluid class="pa-0">
            <section class="education-section py-12">
              <v-container>
                <div class="text-center mb-8">
                  <h2 class="text-h3 font-weight-bold section-title">EDUCATION</h2>
                  <div class="section-underline mx-auto"></div>
                </div>

                <v-carousel
                  cycle
                  height="400"
                  show-arrows="fixed"
                  hide-delimiter-background
                  delimiter-icon="mdi-circle"
                  class="education-carousel"
                >
                  <v-carousel-item
                    v-for="(educationItem, index) in educationEntries"
                    :key="index"
                  >
                    <v-sheet
                      height="100%"
                      tile
                      class="d-flex align-center justify-center"
                      style="background-color: transparent;"
                    >
                      <v-card
                        class="pa-4 education-card"
                        min-width="300"
                        max-width="80%"
                        height="300"
                        elevation="2"
                      >
                        <v-card-title class="text-h6 font-weight-bold justify-center">{{ educationItem.school }}</v-card-title>
                        <v-card-subtitle class="text-subtitle-1 text-center">{{ educationItem.datesAtended }}</v-card-subtitle>
                        <v-card-text class="text-body-2 flex-grow-1 text-center">{{ educationItem.schoolDescription }}</v-card-text>
                      </v-card>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>

                <div class="text-center mt-8">
                  <v-btn @click="downloadResume" outlined class="download-button" large>DOWNLOAD MY FULL RESUME</v-btn>
                </div>
              </v-container>
            </section>
            <div class="additional-content py-12">
              <v-container>
                <h3 class="text-h4 mb-4">About Me</h3>
                <p>
                  Final-year BSc IT student at North West University with 2+ years of experience in full-stack development. Skilled in Vue.js, Node.js, C#, SQL, and Azure DevOps. Currently interning at OhMyCars, building web apps, APIs, and working on database optimization. Passionate about clean code, solving problems, and learning new technologies.
                </p>
                <h3 class="text-h4 mb-4 mt-8">My Skills</h3>
                <v-row>
                  <v-col cols="12" md="6" style="padding-left: 30px;">
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SQL(MSSQL)</li>
                      <li>SASS</li>
                      <li>Language Integrated Query (LINQ)</li>
                      <li>Fork(git client for version control)</li>
                      <li>Agile methodologies</li>
                    </ul>
                  </v-col>
                  <v-col cols="12" md="6" style="padding-left: 30px;">
                    <ul>
                      <li>JavaScript (Node.js, Vue.js)</li>
                      <li>Google Apps Script</li>
                      <li>PowerBI</li>
                      <li>.NET framework</li>
                      <li>Azure</li>
                      <li>AzureDevOps</li>
                      <li>SCRUM</li>
                    </ul>
                  </v-col>
                </v-row>
                <h3 class="text-h4 mb-4 mt-8">Contact Me</h3>
                <p>Feel free to reach out via email or LinkedIn!</p>
                <v-row>
                  <v-col>
                    <v-btn color="primary" href="mailto:nielbotes2003@icloud.com" class="mr-4">Email Me</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn color="primary"  dark href="https://www.linkedin.com/in/niel-botes-abb71a22b/" target="_blank" class="mr-4">LinkedIn</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn color="primary" dark href="https://github.com/NielBotes" target="_blank">GitHub</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-container>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      educationEntries: [
        {
          school: 'Destinata High School',
          datesAtended: '2017 - 2021',
          schoolDescription: 'High School'
        },
        {
          school: 'North West University',
          datesAtended: '2022 - 2025',
          schoolDescription: 'Studieng towards my BSc In IT'
        },
      ],
    };
  },
  methods: {
    downloadResume() {
      const link = document.createElement('a');
      link.href = '/Niel_CV.pdf';
      link.download = 'Niel_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Nato Sans', sans-serif;
}

.relative-container {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.background-blur-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/public/background.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: blur(10px);
  z-index: 0;
}

.main-scroll-area {
  position: relative;
  z-index: 1;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.hero-section {
  min-height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-text {
  color: white;
  text-align: center;
  font-family: 'Nato Sans', serif;
}

.hero-text h1 {
  font-size: 4em;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-text h2 {
  font-size: 1.5em;
  font-weight: 300;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.scrollable-content-card {
  position: relative;
  z-index: 3;
  background-color: black;
  color: #fffbfb;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.1);
  width: 80%;
}

.education-section, .additional-content {
  padding: 80px 0;
  color: #ffffff;
  background-color: black;
}

.education-section {
  color: #ffffff;
  background-color: black;
}

.section-title {
  color: #ffffff;
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
}

.section-underline {
  width: 60px;
  height: 4px;
  background-color: #e53935;
  margin-top: 5px;
}

.education-carousel {
  box-shadow: none !important;
  background-color: black;
}

.education-card {
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  background-color: gray !important;
  color: #ffffff !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
}

.education-card .v-card__title {
  padding-bottom: 8px;
}

.education-card .v-card__subtitle {
  color: #666 !important;
  padding-top: 0;
}

.education-card .v-card__text {
  padding-top: 0;
}

.download-button {
  border-color: #333 !important;
  color: #333 !important;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.download-button:hover {
  background-color: #e53935 !important;
  color: white !important;
  border-color: #e53935 !important;
}

.v-carousel__prev,
.v-carousel__next {
  background-color: gray !important;
  border-radius: 50%;
  padding: 12px;
  opacity: 1 !important;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.v-carousel__prev .v-icon,
.v-carousel__next .v-icon {
  color: #e53935 !important;
}

.v-carousel__controls .v-btn {
  color: #e53935 !important;
  opacity: 0.7;
}

.v-carousel__controls .v-btn--active {
  opacity: 1;
}
</style>