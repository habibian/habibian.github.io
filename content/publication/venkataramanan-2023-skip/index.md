---
title: 'Skip-Attention: Improving Vision Transformers by Paying Less Attention'
authors:
- Shashanka Venkataramanan
- Amir Ghodrati
- Yuki M Asano
- Fatih Porikli
- admin

date: '2023-01-17'

publishDate: '2024-01-07T11:50:19.113534Z'

publication_types: ['paper-conference']

publication: '*ICLR*'

abstract: This work aims to improve the efficiency of vision transformers (ViT). While ViTs use computationally expensive self-attention operations in every layer, we identify that these operations are highly correlated across layers -- a key redundancy that causes unnecessary computations. Based on this observation, we propose SkipAt, a method to reuse self-attention computation from preceding layers to approximate attention at one or more subsequent layers. To ensure that reusing self-attention blocks across layers does not degrade the performance, we introduce a simple parametric function, which outperforms the baseline transformer's performance while running computationally faster. We show the effectiveness of our method in image classification and self-supervised learning on ImageNet-1K, semantic segmentation on ADE20K, image denoising on SIDD, and video denoising on DAVIS. We achieve improved throughput at the same-or-higher accuracy levels in all these tasks. 

tags: [Efficient Transformers, Optimizing Self-Attention]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2301.02240.pdf'
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
