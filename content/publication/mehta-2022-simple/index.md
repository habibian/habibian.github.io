---
title: Simple and Efficient Architectures for Semantic Segmentation
authors:
- Dushyant Mehta
- Andrii Skliar
- Haitam Ben Yahia
- Shubhankar Borse
- Fatih Porikli
- admin
- Tijmen Blankevoort


date: '2022-06-01'

publishDate: '2023-01-07T11:50:19.097855Z'

publication_types: ['paper-conference']

publication: '*CVPR workshop*'

abstract: "Though the state-of-the architectures for semantic segmentation, such as HRNet, demonstrate impressive accuracy, the complexity arising from their salient design choices hinders a range of model acceleration tools, and further they make use of operations that are inefficient on current hardware. This paper demonstrates that a simple encoder-decoder architecture with a ResNet-like backbone and a small multi-scale head, performs on-par or better than complex semantic segmentation architectures such as HRNet, FANet and DDRNets. Naively applying deep backbones designed for Image Classification to the task of Semantic Segmentation leads to sub-par results, owing to a much smaller effective receptive field of these backbones. Implicit among the various design choices put forth in works like HRNet, DDRNet, and FANet are networks with a large effective receptive field. It is natural to ask if a simple encoder-decoder architecture would compare favorably if comprised of backbones that have a larger effective receptive field, though without the use of inefficient operations like dilated convolutions. We show that with minor and inexpensive modifications to ResNets, enlarging the receptive field, very simple and competitive baselines can be created for Semantic Segmentation. We present a family of such simple architectures for desktop as well as mobile targets, which match or exceed the performance of complex models on the Cityscapes dataset. We hope that our work provides simple yet effective baselines for practitioners to develop efficient semantic segmentation models."

tags: [Semantic Segmentation, Efficient Architectures]

# Display this page in the Featured widget?
featured: false

url_pdf: 'https://arxiv.org/pdf/2206.08236.pdf'
url_code: 'https://github.com/Qualcomm-AI-research/FFNet'
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