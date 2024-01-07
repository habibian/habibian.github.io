---
title: 'Clockwork Diffusion: Efficient Generation With Model-Step Distillation'

authors:
- admin
- Amir Ghodrati
- Noor Fathima
- Guillaume Sautiere
- Risheek Garrepalli
- Fatih Porikli
- Jens Petersen

date: '2023-11-18'

publishDate: '2024-01-07T11:50:19.106987Z'

publication_types: ['paper-conference']

publication: '*arXiv preprint*'

abstract: This work aims to improve the efficiency of text-to-image diffusion models. While diffusion models use computationally expensive UNet-based denoising operations in every generation step, we identify that not all operations are equally relevant for the final output quality. In particular, we observe that UNet layers operating on high-res feature maps are relatively sensitive to small perturbations. In contrast, low-res feature maps influence the semantic layout of the final image and can often be perturbed with no noticeable change in the output. Based on this observation, we propose Clockwork Diffusion, a method that periodically reuses computation from preceding denoising steps to approximate low-res feature maps at one or more subsequent steps. For multiple baselines, and for both text-to-image generation and image editing, we demonstrate that Clockwork leads to comparable or improved perceptual scores with drastically reduced computational complexity. As an example, for Stable Diffusion v1.5 with 8 DPM++ steps we save 32% of FLOPs with negligible FID and CLIP change.

tags: [Generative Models, Image Generation, Efficient Diffusion Model]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2312.08128.pdf'
url_code: 'https://github.com/Qualcomm-AI-research/delta-distillation'
url_poster: 'https://arxiv.org/pdf/2312.08128.pdf'
url_project: 'https://arxiv.org/pdf/2312.08128.pdf'
url_slides: 'https://arxiv.org/pdf/2312.08128.pdf'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Cover figure'
  focal_point: ''
  preview_only: false
---
