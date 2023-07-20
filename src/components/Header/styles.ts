import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  width: 100%;
  margin-top: 0px;
  margin-bottom: 33px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;
