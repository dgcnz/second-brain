---
authors:
  - "[[Jerry Zhang|Jerry Zhang]]"
year: 2024
tags:
  - documentation
url: https://pytorch.org/tutorials/prototype/pt2e_quant_ptq.html
share: true
---
Uses `prepare_pt2e` and `convert_pt2e`.

```
float_model(Python)                          Example Input
    \                                              /
     \                                            /
—-------------------------------------------------------
|                        export                        |
—-------------------------------------------------------
                            |
                    FX Graph in ATen     Backend Specific Quantizer
                            |                       /
—--------------------------------------------------------
|                     prepare_pt2e                      |
—--------------------------------------------------------
                            |
                     Calibrate/Train
                            |
—--------------------------------------------------------
|                    convert_pt2e                       |
—--------------------------------------------------------
                            |
                    Quantized Model
                            |
—--------------------------------------------------------
|                       Lowering                        |
—--------------------------------------------------------
                            |
        Executorch, Inductor or <Other Backends>
```