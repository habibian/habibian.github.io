---
title: 'ResQ: Residual Quantization for Video Perception'
authors:
- Davide Abati
- Haitam Ben Yahia
- Markus Nagel
- admin

date: '2023-10-01'

publishDate: '2024-01-07T11:50:19.119584Z'

publication_types: ['paper-conference']

publication: '*ICCV*'

abstract: "This paper accelerates video perception, such as semantic segmentation and human pose estimation, by levering cross-frame redundancies. Unlike the existing approaches, which avoid redundant computations by warping the past features using optical-flow or by performing sparse convolutions on frame differences, we approach the problem from a new perspective: low-bit quantization. We observe that residuals, as the difference in network activations between two neighboring frames, exhibit properties that make them highly quantizable. Based on this observation, we propose a novel quantization scheme for video networks coined as Residual Quantization. ResQ extends the standard, frame-by-frame, quantization scheme by incorporating temporal dependencies that lead to better performance in terms of accuracy vs. bit-width. Furthermore, we extend our model to dynamically adjust the bit-width proportional to the amount of changes in the video. We demonstrate the superiority of our model, against the standard quantization and existing efficient video perception models, using various architectures on semantic segmentation and human pose estimation benchmarks."

tags: [Efficient Video Processing, Low-bit Quantization]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2308.09511.pdf'
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