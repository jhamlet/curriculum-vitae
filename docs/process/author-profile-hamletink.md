---
type: author-profile
extends: author-profile
identity: hamletink
email: jerry@hamletink.com
use-cases:
  - contracting
  - fractional
  - advisory
  - consulting
---

# Author Profile: Jerry Hamlet (Hamletink)

Extends `author-profile.md` for contracting and fractional work.

## Overrides

| Property | Base (Hamletzone)    | This (Hamletink)    |
| -------- | -------------------- | ------------------- |
| email    | jerry@hamletzone.com | jerry@hamletink.com |

## Inheritance Rules

Per the content system pattern:

1. **Scalars:** Child value replaces parent value
2. **Arrays:** Child array replaces parent array (no merging)
3. **Missing properties:** Inherited from parent

All other properties (Context, Objective, Audience, Constraints,
Differentiators, Narrative, Feedback Filter) are inherited from the base
profile.
