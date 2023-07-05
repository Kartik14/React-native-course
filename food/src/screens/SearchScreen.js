import { React, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SeachBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [ term, setTerm ] = useState('')
  const [ searchAPI, results, errorMessage ] =  useResults()

  const getResults = (price) => {
    return results.filter(result => result.price === price);
  }

  return (
    <>
      <SeachBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchAPI(term)} 
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title={'Cost Effective'} results={getResults('$')}/>
        <ResultsList title={'Bit Pricier'} results={getResults('$$')}/>
        <ResultsList title={'Big Spender'} results={getResults('$$$')}/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
