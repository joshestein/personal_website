---
title: "BEng Thesis"
description: "Image segmentation for use in training semantic segmentation neural networks."
date: "Oct 2020"
---

My project was focused on image segmentation for use in training semantic segmentation neural networks, ultimately for
use in self-driving cars. I took two approaches. First, a purely heuristic approach (written in Matlab), which leveraged
LiDAR data to form hierarchical depth clusters, from which objects of interest could be segmented. This approach was
extended to incorporate a GUI. Second, a neural network approach (using Tensorflow) which first identified coarse
bounding boxes around objects of interest and then refined the bounding boxes by hierarchical clustering of LiDAR
data. [Click here for a copy of my project.](/documents/beng_thesis.pdf)
