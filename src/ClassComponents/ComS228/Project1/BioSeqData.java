package edu.iastate.cs228.hw1;

/*
 * Example code
*/

import java.util.Arrays; // This is just for the output statements below.
// You should not import any class in this assignment, but are allowed
// to use any classes and methods already recognized by the Java compiler.

public class BioSeqData
{
  public static void main(String[] args)
  {
    System.out.println( "A first example");
    String demodna = new String("AATGCCAGTCAGCATAGCGTAGACT");
    int[] ardemo = {1, 5, 8, 10, 13, 16};
    GenomicDNASequence gdemo = new GenomicDNASequence(demodna.toCharArray());
    System.out.println( "Genomic sequence: " + gdemo );
    System.out.println( "Sequence length: " + gdemo.seqLength() );
    System.out.println( "Array of exon positions: " + Arrays.toString( ardemo ) );
    gdemo.markCoding(1, 16);
    CodingDNASequence cdemo = new CodingDNASequence( gdemo.extractExons(ardemo) );
    System.out.println( "Coding sequence: " + cdemo );
    if ( cdemo.checkStartCodon() )
    {
      System.out.println( "It has a start codon");
      char[] a = cdemo.translate();
      ProteinSequence aademo = new ProteinSequence( a );
      System.out.println(  "Protein sequence: " + aademo );
    }

    System.out.println( "");
    System.out.println( "A second example");
    String dnastr = new String("GCCTTGTCCATCTGAGTTTCGTAGACGACGTCGTCAATCTGCAGCGGTGGCGGCATGGAAG");
    GenomicDNASequence gseq = new GenomicDNASequence(dnastr.toCharArray());
    System.out.println( "Genomic sequence: " + gseq );
    System.out.println( "Sequence length: " + gseq.seqLength() );
    gseq.markCoding(55, 10);
    int[] parr = {5, 20, 30, 50};
    System.out.println( "Array of exon positions: " + Arrays.toString( parr ) );
    CodingDNASequence cdsseq = new CodingDNASequence( gseq.extractExons(parr) );
    System.out.println( "Coding sequence: " + cdsseq );
    if ( cdsseq.checkStartCodon() )
    {
      System.out.println( "It has a start codon");
      ProteinSequence aaseq = new ProteinSequence( cdsseq.translate() );
      System.out.println( "Protein sequence: " + aaseq );
    }

  }
}
