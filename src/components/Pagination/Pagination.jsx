import { useSelector } from "react-redux";
import { selectTotalPages } from "../../utils/redux/moviesSlice";
import { Container, PageCount, StyledButton } from "./styled";

export const Pagination = ({ searchParams, setSearchParams, containerRef }) => {
 const totalPages = useSelector(selectTotalPages);
 const page = parseInt(searchParams.get("page"));

 const handlePageClickScroll = () => {
  if (containerRef.current) {
   containerRef.current.scrollIntoView({
    alignToTop: true
   });
  }
 };

 const onFirstPageHandler = () => {
  page !== 1 && searchParams.set("page", 1);
  setSearchParams(searchParams);
  handlePageClickScroll();
 };

 const onPreviousPageHandler = () => {
  page !== 1 && searchParams.set("page", page - 1);
  setSearchParams(searchParams);
  handlePageClickScroll();
 };

 const onNextPageHandler = () => {
  page !== totalPages && searchParams.set("page", page + 1);
  setSearchParams(searchParams);
  handlePageClickScroll();
 };

 const onLastPageHandler = () => {
  page !== totalPages && searchParams.set("page", totalPages);
  setSearchParams(searchParams);
  handlePageClickScroll();
 };

 return (
  <Container>
   <StyledButton
    onClick={onFirstPageHandler}
    disabled={page === 1}
   >
    &lt;&lt;
   </StyledButton>
   <StyledButton
    onClick={onPreviousPageHandler}
    disabled={page === 1}
   >
    &lt;
   </StyledButton>
   <PageCount>
    Page {page} of {totalPages}
   </PageCount>
   <StyledButton
    onClick={onNextPageHandler}
    disabled={page === totalPages}
   >
    &gt;
   </StyledButton>
   <StyledButton
    onClick={onLastPageHandler}
    disabled={page === totalPages}
   >
    &gt;&gt;
   </StyledButton>
  </Container>
 );
};
