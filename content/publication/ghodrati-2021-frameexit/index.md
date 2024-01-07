---
title: 'Frame-Exit: Conditional Early Exiting for Efficient Video Recognition'
authors:
- Amir Ghodrati
- Babak Ehteshami Bejnordi
- admin

date: '2021-06-01'

publishDate: '2022-01-07T11:50:19.155529Z'

publication_types: ['paper-conference']

publication: '*CVPR*'

abstract: "In this paper, we propose a conditional early exiting framework for efficient video recognition. While existing works focus on selecting a subset of salient frames to reduce the computation costs, we propose to use a simple sampling strategy combined with conditional early exiting to enable efficient recognition. Our model automatically learns to process fewer frames for simpler videos and more frames for complex ones. To achieve this, we employ a cascade of gating modules to automatically determine the earliest point in processing where an inference is sufficiently reliable. We generate on-the-fly supervision signals to the gates to provide a dynamic trade-off between accuracy and computational cost. Our proposed model outperforms competing methods on three large-scale video benchmarks. In particular, on ActivityNet1.3 and mini-kinetics, we outperform the state-of-the-art efficient video recognition methods with 1.3× and 2.1× less GFLOPs, respectively. Additionally, our method sets a new state of the art for efficient video understanding on the HVU benchmark."

tags: [Efficient Video Processing, Conditional Computation, Early Exiting]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2104.13400.pdf'
url_code: 'https://github.com/Qualcomm-AI-research/FrameExit'
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
