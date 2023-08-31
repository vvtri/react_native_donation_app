import React, { useRef, useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchStyle } from './style';

type Props = {
  onSearch?: (searchText: string) => any;
  placeholder?: string;
};

const Search = ({ onSearch, placeholder }: Props) => {
  const [searchText, setSearchText] = useState('');
  const textInputRef = useRef<TextInput | null>(null);

  const handleChangeText = (value: string) => {
    setSearchText(value);
    onSearch && onSearch(value);
  };

  const onPress = () => {
    textInputRef.current?.focus();
  };

  return (
    <Pressable style={[searchStyle.container]} onPress={onPress}>
      <FontAwesomeIcon icon={faSearch} size={22} color="#25C0FF" />
      <TextInput
        ref={textInputRef}
        style={[searchStyle.inputText]}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={searchText}
      />
    </Pressable>
  );
};

export default Search;
