// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-abhishek",
    title: "Abhishek",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-implemented-papers",
          title: "implemented papers",
          description: "Research papers I&#39;ve implemented from scratch - my journey from paper to code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/implemented-papers/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects built during my academic journey.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My coding profiles and GitHub repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is my resume. you can dowwnload it from the button right here",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-navigating-the-waves-my-m-tech-research-journey-in-swot-satellite-data-analysis",
        
          title: "Navigating the Waves: My M.Tech Research Journey in SWOT Satellite Data Analysis",
        
        description: "A deep dive into oceanographic research, satellite data integration, and the lessons learned analyzing SWOT, GHRSST, and AVISO data to study ocean dynamics and cyclone responses.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/mtech-research-journey-swot-satellite/";
          
        },
      },{id: "post-the-spectrum-of-consciousness-trees-animals-humans-machines-amp-neural-agents",
        
          title: "The Spectrum of Consciousness: Trees, Animals, Humans, Machines &amp; Neural Agents",
        
        description: "From root networks to silicon minds — a philosophical inquiry into what it means to be aware. Spanning five kinds of being: trees, animals, humans, classical machines, and the modern edge of neural networks and agentic AI.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/spectrum-of-consciousness/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-fashion-recommendation-system",
          title: 'Fashion Recommendation System',
          description: "Visual fashion recommendation using CLIP, CNN, and Gemini",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-cricket-ball-detection-amp-tracking",
          title: 'Cricket Ball Detection &amp;amp; Tracking',
          description: "Real-time ball detection using YOLOv8 and DeepSORT tracking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-text-classification",
          title: 'Text Classification',
          description: "Multi-class text classification using N-grams and Feed-Forward Neural Networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-seq2seq-transliteration",
          title: 'Seq2Seq Transliteration',
          description: "GRU-based encoder-decoder model with Bahdanau Attention for transliteration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-character-level-language-modeling",
          title: 'Character-Level Language Modeling',
          description: "Language models using RNN, LSTM, and FNN with temperature-based sampling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-transformer-pruning-and-analysis",
          title: 'Transformer Pruning and Analysis',
          description: "Structured and unstructured pruning of T5 transformer model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-maintenance-agentic-ai",
          title: 'Maintenance.Agentic.AI',
          description: "Autonomous AI Maintenance Assistant using LangGraph and LangChain",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-mnist-unsupervised-learning",
          title: 'MNIST Unsupervised Learning',
          description: "Clustering MNIST digits using GMM, Bayesian GMM, and K-Means++",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-diabetes-dataset-classification",
          title: 'Diabetes Dataset Classification',
          description: "Classification using Logistic Regression with PCA and LDA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-semantic-segmentation",
          title: 'Semantic Segmentation',
          description: "Multi-class semantic segmentation using CNN and U-Net architecture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-credit-card-fraud-detection",
          title: 'Credit Card Fraud Detection',
          description: "Fraud detection using CNN with SMOTE and class reweighting",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%62%68%69%6B%75%6D%61%77%61%74%30%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-2817-924X", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/+918003695559", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/abhishekkumawat001", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/abhishekkumawat001", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/__blunt_roll_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
