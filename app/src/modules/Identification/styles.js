import styled from 'styled-components';
import SearchBar from 'material-ui-search-bar'
import Select from '@material-ui/core/Select';


export const AddButtonContent = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`;

export const ToolbarActions = styled.div`
  display: flex;
`;

export const TitleContent = styled.div`
  display: none;
  
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StatusValue = styled.div`
  @media screen and (min-width: 806px) {
    flex: 1;
  }
`;

export const SelectOrder = styled(Select)`
  color: inherit !important; //because material-ui theme
  width: 200px;
`;

export const SearchBarPage = styled(SearchBar)`
  height: 5px;
`;

export const MobileStatusContent = styled.span`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;


export const Main = styled.main`
  padding: 64px 16px;
  background-color: #f7f7f7;
  position: relative;
  margin-top: 8px;
  
  @media screen and (min-width: 394px) {
      margin-top: 0;
    }
 
 @media screen and (min-width: 480px) {
  padding: 64px 32px;
  }
  
    @media screen and (min-width: 600px) {
      margin-top: 16px;
    }
`;

export const ListItemValues = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ListItemActions = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
  
   button + button {
    margin-left: 16px;
  }
  
  @media screen and (min-width: 480px) {
      padding-top: 8px;
    }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  
  &:hover {
    background-color: #ccc;
  }
  
  @media screen and (min-width: 480px) {
    padding: 16px 32px;
  }
  
   @media screen and (min-width: 806px) {
    flex-direction: row;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  ${ListItem} + ${ListItem} {
    border-top: 1px solid #f7f7f7;
  }
`;

export const Grow = styled.div`
  flex-grow: 1;
`;

export const DocumentValue = styled.div`
  flex: 2;
`;

export const DesktopStatusContent = styled.span`
  display: none;
  
  @media screen and (min-width: 768px) {
    display: inline;
  }
`;
