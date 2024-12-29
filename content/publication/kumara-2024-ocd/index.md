---
title: 'Object-Centric Diffusion for Efficient Video Editing'

authors:
- Kumara Kahatapitiya
- Adil Karjauv
- Davide Abati
- Fatih Porikli
- Yuki Asano
- admin

date: '2024-01-11'

publishDate: '2024-01-14T11:50:19.106987Z'

publication_types: ['paper-conference']

publication: '*ECCV*'

abstract: "Diffusion-based video editing have reached impressive quality and can transform either the global style, local structure, and attributes of given video inputs, following textual edit prompts. However, such solutions typically incur heavy memory and computational costs to generate temporally-coherent frames, either in the form of diffusion inversion and/or cross-frame attention. In this paper, we conduct an analysis of such inefficiencies, and suggest simple yet effective modifications that allow significant speed-ups whilst maintaining quality. Moreover, we introduce Object-Centric Diffusion, coined as OCD, to further reduce latency by allocating computations more towards foreground edited regions that are arguably more important for perceptual quality. We achieve this by two novel proposals: i) Object-Centric Sampling, decoupling the diffusion steps spent on salient regions or background, allocating most of the model capacity to the former, and ii) Object-Centric 3D Token Merging, which reduces cost of cross-frame attention by fusing redundant tokens in unimportant background regions. Both techniques are readily applicable to a given video editing model without retraining, and can drastically reduce its memory and computational cost. We evaluate our proposals on inversion-based and control-signal-based editing pipelines, and show a latency reduction up to 10x for a comparable synthesis quality."

tags: [Generative Modeling, Video Generation, Efficient Diffusion Model]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2401.05735.pdf'
url_code: ''
url_poster: ''
url_project: 'https://qualcomm-ai-research.github.io/object-centric-diffusion/'
url_slides: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Cover figure'
  focal_point: ''
  preview_only: false
---
