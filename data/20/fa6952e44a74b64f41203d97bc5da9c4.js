callback({
  "levelNumber": 20,
  "size": 196,
  "steps": 56,
  "successRatio": 0.04,
  "type": "specific",
  "author": "viamodulo",
  "hash": "fa6952e44a74b64f41203d97bc5da9c4",
  "path": "20-Multiplication-Workshop-15.109/196.53.specific-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 196/15 - SPEED 53/109 --\n\n-- This solution is level-specific (patterned and quality-limited input) and assumes 5 input\n-- pairs : ++ ++ +0 0+ ++ (where 0 < + <= 9).\n-- Based on 92.64.specific-mschordan.asm.\n\n    BUMPUP   9\n    BUMPUP   9\n    ADD      9\n    COPYTO   4\n\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      4\n    JUMPN    a123\n    JUMPZ    a4\n    SUB      9\n    JUMPN    a5\n    JUMPZ    a6\n    SUB      9\n    JUMPN    a7\n    JUMPZ    a8\n\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    JUMP     outA\n\na1:\n    COPYFROM 0\n    JUMP     outA\na2:\n    COPYFROM 0\n    ADD      0\n    JUMP     outA\na123:\n    ADD      9\n    JUMPN    a1\n    JUMPZ    a2\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     outA\na4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outA\na5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outA\na6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    JUMP     outA\na7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    JUMP     outA\na8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\noutA:\n    OUTBOX\nb:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      4\n    JUMPN    b123\n    JUMPZ    b4\n    SUB      9\n    JUMPN    b5\n    JUMPZ    b6\n    SUB      9\n    JUMPN    b7\n    JUMPZ    b8\n\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    JUMP     outB\n\nb1:\n    COPYFROM 0\n    JUMP     outB\nb2:\n    COPYFROM 0\n    ADD      0\n    JUMP     outB\nb123:\n    ADD      9\n    JUMPN    b1\n    JUMPZ    b2\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     outB\nb4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outB\nb5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outB\nb6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    JUMP     outB\nb7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    JUMP     outB\nb8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\noutB:\n    OUTBOX\n\tINBOX\n\tINBOX\n\tOUTBOX\n\tINBOX\n\tOUTBOX\n\tINBOX\n\n    INBOX   \n    COPYTO   0\n    INBOX   \n    SUB      4\n    JUMPN    c123\n    JUMPZ    c4\n    SUB      9\n    JUMPN    c5\n    JUMPZ    c6\n    SUB      9\n    JUMPN    c7\n    JUMPZ    c8\n\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    JUMP     outB\n\nc1:\n    COPYFROM 0\n    JUMP     outB\nc2:\n    COPYFROM 0\n    ADD      0\n    JUMP     outB\nc123:\n    ADD      9\n    JUMPN    c1\n    JUMPZ    c2\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     outB\nc4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outB\nc5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outB\nc6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    JUMP     outB\nc7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    JUMP     outB\nc8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n\tOUTBOX\n"
});