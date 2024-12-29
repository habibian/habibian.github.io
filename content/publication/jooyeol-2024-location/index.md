---
title: 'Generative Location Modeling for Spatially Aware Object Insertion'

authors:
- Jooyeol Yun
- Davide Abati
- Mohamed Omran
- Jaegul Choo
- admin
- Auke Wiggers

date: '2024-10-17'

publishDate: '2024-10-17T11:50:19.106987Z'

publication_types: ['paper-conference']

publication: '*arXiv preprint*'

abstract: Generative models have become a powerful tool for image editing tasks, including object insertion. However, these methods often lack spatial awareness, generating objects with unrealistic locations and scales, or unintentionally altering the scene background. A key challenge lies in maintaining visual coherence, which requires both a geometrically suitable object location and a high-quality image edit. In this paper, we focus on the former, creating a location model dedicated to identifying realistic object locations. Specifically, we train an autoregressive model that generates bounding box coordinates, conditioned on the background image and the desired object class. This formulation allows to effectively handle sparse placement annotations and to incorporate implausible locations into a preference dataset by performing direct preference optimization. Our extensive experiments demonstrate that our generative location model, when paired with an inpainting method, substantially outperforms state-of-the-art instruction-tuned models and location modeling baselines in object insertion tasks, delivering accurate and visually coherent results.

tags: [Location Modeling, Image Editing, Diffusion Models]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2410.13564'
url_code: ''
url_poster: ''
url_project: 'https://qualcomm-ai-research.github.io/location-modeling/'
url_slides: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Cover figure'
  focal_point: ''
  preview_only: false
---
