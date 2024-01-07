---
title: Skip-Convolutions for Efficient Video Processing
authors:
- admin
- Davide Abati
- Taco S Cohen
- Babak Ehteshami Bejnordi

date: '2021-06-01'

publishDate: '2022-01-07T11:50:19.155529Z'

publication_types: ['paper-conference']

publication: '*CVPR*'

abstract: "We propose Skip-Convolutions to leverage the large amount of redundancies in video streams and save computations. Each video is represented as a series of changes across frames and network activations, denoted as residuals. We reformulate standard convolution to be efficiently computed on residual frames: each layer is coupled with a binary gate deciding whether a residual is important to the model prediction,~\eg foreground regions, or it can be safely skipped, e.g. background regions. These gates can either be implemented as an efficient network trained jointly with convolution kernels, or can simply skip the residuals based on their magnitude. Gating functions can also incorporate block-wise sparsity structures, as required for efficient implementation on hardware platforms. By replacing all convolutions with Skip-Convolutions in two state-of-the-art architectures, namely EfficientDet and HRNet, we reduce their computational cost consistently by a factor of 3~4x for two different tasks, without any accuracy drop. Extensive comparisons with existing model compression, as well as image and video efficiency methods demonstrate that Skip-Convolutions set a new state-of-the-art by effectively exploiting the temporal redundancies in videos."

tags: [Efficient Video Processing, Conditional Computation, Sparse Convolution]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2104.11487.pdf'
url_code: 'https://github.com/Qualcomm-AI-research/Skip-Conv'
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
