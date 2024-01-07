---
title: Delta Distillation for Efficient Video Processing
authors:
- admin
- Haitam Ben Yahia
- Davide Abati
- Efstratios Gavves
- Fatih Porikli

date: '2022-10-01'

publishDate: '2024-01-07T11:50:19.131497Z'

publication_types: ['paper-conference']

publication: '*ECCV*'

abstract: "This paper aims to accelerate video stream processing, such as object detection and semantic segmentation, by leveraging the temporal redundancies that exist between video frames. Instead of propagating and warping features using motion alignment, such as optical flow, we propose a novel knowledge distillation schema coined as Delta Distillation. In our proposal, the student learns the variations in the teacher's intermediate features over time. We demonstrate that these temporal variations can be effectively distilled due to the temporal redundancies within video frames. During inference, both teacher and student cooperate for providing predictions: the former by providing initial representations extracted only on the key-frame, and the latter by iteratively estimating and applying deltas for the successive frames. Moreover, we consider various design choices to learn optimal student architectures including an end-to-end learnable architecture search. By extensive experiments on a wide range of architectures, including the most efficient ones, we demonstrate that delta distillation sets a new state of the art in terms of accuracy vs. efficiency trade-off for semantic segmentation and object detection in videos. Finally, we show that, as a by-product, delta distillation improves the temporal consistency of the teacher model."

tags: [Efficient Video Processing, Knowledge Distillation]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2203.09594.pdf'
url_code: ''
url_poster: ''
url_project: ''
url_slides: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Cover figure'
  focal_point: ''
  preview_only: false
---
