// when you write code, one of the most basic things you do is to declare variable
// then you use that variable later
// that variable is 'stored', taking up a memory

// what is memory?
// imagine it as a canvas that's divided into finite number of slots
// this is a 'bounded' canvas.

// you want algorithm to take up less memory space!
// what is the unit we use to represent memory?
// we use 'Bit', short of binary digit. bit is composed of 0 and 1s
// one memory slot is composed of 8 bits, called 'Byte'
// ex) 1: 0000 0001  2: 0000 0010 ...
// So, if we store number 1 is stored in slot 4, slot 4 would have '0000 0001' inside

// IMPORTANT NOTE

// Data stored in memory is sotred in bytes and by extension, bits.
// Bytes in memory can 'point' to other bytes in memory, so as to provide reference to other data
// the amount of memory that a machine has is bounded
// accessing a byte or a fixed number of butes is elementary operation which can be
// loosely treated as a single unit of operational work