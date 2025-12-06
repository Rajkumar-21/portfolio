# Portfolio Website

A modern, responsive portfolio website built with React 19, Vite, and Tailwind CSS. Features dynamic Credly badge integration to showcase professional certifications.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19 (latest version), Vite, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dynamic Certifications**: Automatically fetches and displays Credly badges
- **Smooth Animations**: Elegant animations and transitions
- **Skills Showcase**: Interactive skills section with proficiency levels
- **Project Gallery**: Showcase your best projects with descriptions
- **Contact Form**: Functional contact form for visitor inquiries
- **SEO Optimized**: Clean code structure for better SEO

## 📋 Sections

1. **Hero** - Welcome section with call-to-action
2. **About** - Personal introduction and highlights
3. **Skills** - Technical skills with proficiency indicators
4. **Certifications** - Dynamic Credly badges display
5. **Projects** - Featured projects gallery
6. **Contact** - Contact form and social links

## 🛠️ Technologies Used

- **React 19.2.0** - Latest React version
- **Vite 7.2.4** - Next-generation frontend tooling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Icons** - Icon library
- **AllOrigins Proxy** - CORS bypass for Credly API

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/Rajkumar-21/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Configuration

### Credly Integration

To use your own Credly badges:

1. Open `src/services/credlyService.js`
2. Replace the `CREDLY_USER_ID` with your Credly user ID
3. Find your user ID by:
   - Going to your Credly profile
   - Opening browser DevTools (Network tab)
   - Refreshing the page
   - Looking for the request to `badges?page=1&page_size=48`
   - Copy the UUID from the URL

### Personal Information

Update the following files with your information:

- `src/components/Header.jsx` - Social links
- `src/components/Hero.jsx` - Name and description
- `src/components/About.jsx` - About section content
- `src/components/Skills.jsx` - Your skills and proficiency
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information

## 🚀 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

## 📦 Deployment

This project can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `dist` folder

## 🤝 How Credly Integration Works

The portfolio uses a clever workaround to fetch Credly badges without requiring an API key:

1. Credly exposes public badge data at `https://www.credly.com/users/{user-id}/badges.json`
2. Since this endpoint doesn't include CORS headers, we use the AllOrigins proxy service
3. The proxy fetches the data and returns it with proper CORS headers
4. Badge data is parsed and displayed with images, descriptions, and skills

Reference: [Medium Article by Stephanie Hohenberg](https://medium.com/@stephaniehohenberg/how-i-dynamically-embedded-credly-badges-in-my-angular-portfolio-no-api-key-needed-fa5086cfa56d)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Rajkumar**
- GitHub: [@Rajkumar-21](https://github.com/Rajkumar-21)
- Credly: [View Badges](https://www.credly.com/users/aa930a5b-a2a3-4922-8bc3-43292f13eacb/badges)

## 🙏 Acknowledgments

- Credly for providing public badge data
- AllOrigins for the CORS proxy service
- React and Vite teams for amazing tools
- Tailwind CSS for the utility-first CSS framework

---

Made with ❤️ using React & Tailwind CSS
