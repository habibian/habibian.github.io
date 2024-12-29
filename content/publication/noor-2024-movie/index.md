---
title: 'Mobile Video Diffusion'

authors:
- Haitam Ben Yahia
- Denis Korzhenkov
- Ioannis Lelekas
- Amir Ghodrati
- admin

date: '2024-12-11'

publishDate: '2024-12-11T11:50:19.106987Z'

publication_types: ['paper-conference']

publication: '*arXiv preprint*'

abstract: Video diffusion models have achieved impressive realism and controllability but are limited by high computational demands, restricting their use on mobile devices. This paper introduces the first mobile-optimized video diffusion model. Starting from a spatio-temporal UNet from Stable Video Diffusion (SVD), we reduce memory and computational cost by reducing the frame resolution, incorporating multi-scale temporal representations, and introducing two novel pruning schema to reduce the number of channels and temporal blocks. Furthermore, we employ adversarial finetuning to reduce the denoising to a single step. Our model, coined as MobileVD, is 523x more efficient (1817.2 vs. 4.34 TFLOPs) with a slight quality drop (FVD 149 vs. 171), generating latents for a 14x512x256 px clip in 1.7 seconds on a Xiaomi-14 Pro. Our results are available at https://qualcomm-ai-research.github.io/mobile-video-diffusion/

tags: [Generative Modeling, Video Generation, Efficient Diffusion Model]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2412.07583'
url_code: 'https://qualcomm-ai-research.github.io/mobile-video-diffusion/'
url_poster: ''
url_project: 'https://qualcomm-ai-research.github.io/mobile-video-diffusion/'
url_slides: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Cover figure'
  focal_point: ''
  preview_only: false
---
