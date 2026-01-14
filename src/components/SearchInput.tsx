import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setSearchText } from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          dispatch(setSearchText(ref.current.value));
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
          width="100%"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
